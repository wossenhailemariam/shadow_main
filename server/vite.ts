import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { nanoid } from "nanoid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: { middlewareMode: true, hmr: { server } },
    appType: "custom",
  });

  app.use(vite.middlewares);

  // Use a Regex for the catch-all to satisfy Express 5's strict parser
  app.use(/^(?!\/api).*/, async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // Corrected path: goes up one level from 'server' to find 'client'
      const clientTemplate = path.resolve(__dirname, "..", "client", "index.html");
      
      if (!fs.existsSync(clientTemplate)) {
        return res.status(404).send(`Missing index.html at ${clientTemplate}`);
      }

      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      
      // Prevent script caching
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );

      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
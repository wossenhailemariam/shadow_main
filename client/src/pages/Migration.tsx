import { PageWrapper } from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { ArrowDown, Code2, FileJson } from "lucide-react";

export default function Migration() {
  return (
    <PageWrapper>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">The Wedge</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Our ingestion engine transforms your brittle Playwright/Cypress scripts into robust, semantic agent directives.
        </p>
      </div>

      <div className="grid lg:grid-cols-7 gap-8 items-center max-w-6xl mx-auto">
        {/* Legacy Code Window */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="lg:col-span-3 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"/>
            <div className="w-3 h-3 rounded-full bg-yellow-500"/>
            <div className="w-3 h-3 rounded-full bg-green-500"/>
            <span className="ml-2 text-xs text-slate-400 font-mono">legacy_test.spec.ts</span>
          </div>
          <div className="p-6 font-mono text-xs md:text-sm text-slate-300 overflow-x-auto">
            <pre>
{`test('login flow', async ({ page }) => {
  // ⚠️ Fragile selectors
  await page.click('.btn-primary');
  
  // ⚠️ Arbitrary waits
  await page.waitForTimeout(1000);
  
  await page.fill('#username', 'user');
  await page.click('div > span:nth-child(2)');
});`}
            </pre>
          </div>
        </motion.div>

        {/* Transition Arrow */}
        <div className="lg:col-span-1 flex justify-center">
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, 0, 0, 90, 90, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center shadow-lg shadow-primary/30"
          >
            <ArrowDown className="text-white w-8 h-8 lg:rotate-[-90deg]" />
          </motion.div>
        </div>

        {/* Shadow Agent JSON */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 bg-white rounded-2xl overflow-hidden shadow-2xl border border-primary/20"
        >
          <div className="bg-slate-50 px-4 py-2 flex items-center gap-2 border-b">
            <div className="w-3 h-3 rounded-full bg-slate-300"/>
            <div className="w-3 h-3 rounded-full bg-slate-300"/>
            <span className="ml-2 text-xs text-primary font-bold font-mono">agent_directive.json</span>
          </div>
          <div className="p-6 font-mono text-xs md:text-sm text-slate-700 overflow-x-auto bg-primary/5">
            <pre>
{`{
  "agent_role": "authenticated_user",
  "goal": "purchase_subscription",
  "constraints": {
    "max_latency": "200ms",
    "jitter": true
  },
  "strategy": "semantic",
  // ✅ Intent-based actions
  "steps": [
    { "action": "authenticate" },
    { "action": "navigate_to_pricing" },
    { "action": "select_enterprise_plan" }
  ]
}`}
            </pre>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-8">Supported Frameworks</h3>
        <div className="flex flex-wrap justify-center gap-8 opacity-60">
          {["Cypress", "Playwright", "Selenium", "Puppeteer", "Jest"].map(tool => (
            <span key={tool} className="text-2xl font-display font-bold text-slate-400">{tool}</span>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

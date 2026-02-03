import { PageWrapper } from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Globe, Server, Shield, Zap } from "lucide-react";

export default function Infrastructure() {
  return (
    <PageWrapper>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">The Network</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          A global mesh of autonomous agents executing from 140+ edge regions. 
          Simulate the real world, not just localhost.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <Card 
          icon={<Globe className="w-8 h-8 text-primary" />}
          title="Edge Deployment"
          description="Spin up agents in Tokyo, Frankfurt, NYC, or Sao Paulo instantly. Test latency and regional content delivery."
        />
        <Card 
          icon={<Zap className="w-8 h-8 text-yellow-500" />}
          title="Human Jitter"
          description="Agents mimic human behavior with variable input speeds, mouse movements, and decision-making pauses."
        />
        <Card 
          icon={<Shield className="w-8 h-8 text-green-500" />}
          title="SOC2 Compliant"
          description="Enterprise-grade security. Data encryption at rest and in transit. Detailed audit logs for every agent action."
        />
      </div>

      {/* Abstract Map Visualization */}
      <div className="relative w-full h-[400px] glass rounded-3xl overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900/5" />
        
        {/* Animated Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            className="absolute rounded-full border border-primary/30 w-32 h-32"
          />
        ))}
        
        <div className="relative z-10 text-center">
          <Server className="w-16 h-16 text-primary mx-auto mb-4" />
          <div className="font-mono text-sm text-primary font-bold">NODE STATUS: ACTIVE</div>
          <div className="font-mono text-xs text-slate-500 mt-2">1,240 AGENTS ONLINE</div>
        </div>
      </div>

      {/* Latency Section */}
      <section className="mt-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Real-World Latency Simulation</h2>
            <p className="text-slate-500 leading-relaxed">
              Standard automated tests hide the impact of distance. Shadow QA runs agents from real residential and mobile IPs across the globe to measure true Time-to-Interactive.
            </p>
          </div>
          <div className="glass px-6 py-3 rounded-xl border-primary/20">
            <span className="text-sm font-bold text-primary">AVERAGE GLOBAL RTT: 42ms</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { region: "Tokyo (NRT)", latency: "12ms", load: "High" },
            { region: "London (LHR)", latency: "24ms", load: "Normal" },
            { region: "New York (JFK)", latency: "8ms", load: "Idle" },
            { region: "Mumbai (BOM)", latency: "56ms", load: "Active" }
          ].map((item, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border-white/40">
              <div className="text-xs font-bold text-slate-400 mb-1">{item.region}</div>
              <div className="text-2xl font-display font-bold text-slate-900 mb-2">{item.latency}</div>
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${item.load === 'High' ? 'bg-red-400' : 'bg-green-400'}`} />
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.load}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="grid md:grid-cols-2 gap-12 mt-20 py-20 border-t border-slate-200">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Protocol Isolation</h3>
          <p className="text-slate-500 leading-relaxed mb-6">
            Every agent operates in a sandboxed, hardware-isolated browser environment. No shared cookies, no shared cache, and no leaked sessions between parallel runs.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-slate-700 font-medium">
              <Shield className="w-5 h-5 text-primary" />
              L3/L4 Network Sandboxing
            </li>
            <li className="flex items-center gap-3 text-slate-700 font-medium">
              <Shield className="w-5 h-5 text-primary" />
              Ephemeral Compute Lifecycle
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Behavior Jitter Engine</h3>
          <p className="text-slate-500 leading-relaxed mb-6">
            We've mapped thousands of hours of real human browsing patterns. Our jitter engine applies non-deterministic pauses, organic mouse curves, and variable typing cadences.
          </p>
          <div className="bg-slate-900 rounded-2xl p-6 font-mono text-[10px] md:text-xs text-green-400 shadow-2xl">
            <div className="flex gap-2 mb-2 border-b border-white/10 pb-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div>{"{"}</div>
            <div className="pl-4 text-slate-400">// Applying organic mouse curve</div>
            <div className="pl-4">"bezier_path": [x: 42, y: 120, tension: 0.82],</div>
            <div className="pl-4">"typing_delay": [min: 40, max: 210, skew: "gaussian"],</div>
            <div className="pl-4">"scroll_velocity": "0.12f",</div>
            <div className="pl-4 text-slate-400">// Bypassing naive bot detection</div>
            <div className="pl-4">"fingerprint": "random_stable_desktop_v4"</div>
            <div>{"}"}</div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

function Card({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card p-8 rounded-2xl"
    >
      <div className="mb-6 p-4 rounded-xl bg-slate-50 inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

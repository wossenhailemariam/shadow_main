import { PageWrapper } from "@/components/PageWrapper";
import { NetworkGrid } from "@/components/NetworkGrid";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Globe, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <PageWrapper>
      <NetworkGrid />
      
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="px-4 py-2 rounded-full glass border-primary/20 text-primary font-medium text-sm">
            The Future of Quality Assurance
          </span>
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[1.1]">
          Testing as a <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Simulation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop writing flaky assertions. Deploy autonomous shadow agents that behave like real users, globally.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all">
              Deploy Agents
            </button>
          </Link>
          <Link href="/migration">
            <button className="px-8 py-4 glass text-slate-700 rounded-xl font-bold text-lg hover:bg-white/60 transition-all">
              See How It Works
            </button>
          </Link>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="grid md:grid-cols-2 gap-8 my-20">
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card rounded-3xl p-8 border-l-4 border-slate-200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
              <Activity className="w-6 h-6 text-slate-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Legacy QA</h3>
          </div>
          <ul className="space-y-4 text-slate-500">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">✕</span> Fragile DOM selectors break on UI updates
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">✕</span> Linear execution is slow and blocking
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">✕</span> Localhost doesn't match production latency
            </li>
          </ul>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card rounded-3xl p-8 border-l-4 border-primary bg-gradient-to-br from-white/60 to-primary/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Shadow Agents</h3>
          </div>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 font-bold">✓</span> Semantic understanding adapts to changes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 font-bold">✓</span> Massively parallel simulation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 font-bold">✓</span> Real traffic patterns from 140+ regions
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">Trusted by the elite</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {/* Using placeholder logos */}
          <div className="text-2xl font-display font-black tracking-tighter">VOLT</div>
          <div className="text-2xl font-display font-black tracking-tighter">AXON</div>
          <div className="text-2xl font-display font-black tracking-tighter">QUARK</div>
          <div className="text-2xl font-display font-black tracking-tighter">ZENITH</div>
          <div className="text-2xl font-display font-black tracking-tighter">ORBIT</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { label: "Uptime SLA", value: "99.99%", detail: "Enterprise-grade reliability" },
          { label: "Daily Simulations", value: "1.2B+", detail: "At massive scale" },
          { label: "Global Regions", value: "140+", detail: "Testing from everywhere" }
        ].map((stat, idx) => (
          <div key={idx} className="glass rounded-3xl p-8 text-center">
            <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{stat.label}</div>
            <div className="text-4xl font-display font-bold text-slate-900 mb-2">{stat.value}</div>
            <div className="text-slate-500">{stat.detail}</div>
          </div>
        ))}
      </section>

      {/* Methodology */}
      <section className="py-20 glass rounded-[3rem] p-12 mb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">The Shadow Methodology</h2>
          <p className="text-xl text-slate-500 leading-relaxed mb-8">
            Our agents don't just run scripts. They simulate intent. By modeling human decision trees and injecting randomized behavior patterns, Shadow QA uncovers the edge cases that standard automated tests miss by design.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Autonomous Discovery
              </h4>
              <p className="text-slate-500 text-sm">Agents explore your UI surface area to find new paths and hidden vulnerabilities.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Self-Healing Selection
              </h4>
              <p className="text-slate-500 text-sm">No more brittle CSS selectors. Our agents use visual and semantic cues to navigate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Detail (New Section for length) */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square glass rounded-3xl overflow-hidden flex items-center justify-center p-12">
               <ShieldCheck className="w-32 h-32 text-primary/20 absolute animate-pulse" />
               <div className="relative z-10 space-y-4">
                  <div className="glass px-4 py-2 rounded-lg text-xs font-mono border-white/40 shadow-sm">AES-256 ENCRYPTION</div>
                  <div className="glass px-4 py-2 rounded-lg text-xs font-mono border-white/40 shadow-sm">TLS 1.3 TUNNELING</div>
                  <div className="glass px-4 py-2 rounded-lg text-xs font-mono border-white/40 shadow-sm">PII MASKING ACTIVE</div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold text-slate-900">SOC2</div>
              <div className="text-xs font-bold text-primary">TYPE II COMPLIANT</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">Enterprise-Grade Security by Default</h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              We understand the sensitivity of your staging and production environments. Every Shadow Agent operates in a volatile, single-use container that is cryptographically shredded upon completion.
            </p>
            <div className="space-y-4">
              {[
                "Zero-Trust Architecture",
                "Automated PII Scrubbing",
                "Regional Data Residency",
                "Audit-Ready Logs"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 font-bold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

import { Link } from "wouter";
import { Globe, Shield, Cpu, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="glass-card mt-24 border-t-0 rounded-t-[3rem] pb-12 pt-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Shield className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold text-slate-900 tracking-tighter">
                Ameriix <span className="text-primary">LLC</span>
              </span>
            </div>
          </Link>
          <p className="text-slate-500 leading-relaxed max-w-xs">
            The world's first autonomous simulation engine for high-fidelity quality assurance. Deploying shadow agents to 140+ regions.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Product</h4>
          <ul className="space-y-4">
            <li><Link href="/infrastructure"><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Global Network</span></Link></li>
            <li><Link href="/migration"><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Ingestion Engine</span></Link></li>
            <li><Link href="/pricing"><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Scale Plan</span></Link></li>
            <li><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Security Center</span></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
          <ul className="space-y-4">
            <li><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Documentation</span></li>
            <li><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">API Reference</span></li>
            <li><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">System Status</span></li>
            <li><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Community</span></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></li>
            <li><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Terms of Service</span></li>
            <li><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Cookie Policy</span></li>
            <li><span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Security Compliance</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          © 2026 Ameriix LLC Simulation Engine. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm text-slate-400">
          <span className="hover:text-slate-600 transition-colors cursor-pointer">Uptime: 99.99%</span>
          <span className="hover:text-slate-600 transition-colors cursor-pointer">Version: 2.4.0-stable</span>
        </div>
      </div>
    </footer>
  );
}

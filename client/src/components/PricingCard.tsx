import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function PricingCard() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="max-w-md mx-auto glass-card rounded-3xl p-8 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
          ENTERPRISE SCALE
        </div>

        <h3 className="text-4xl font-display font-bold text-slate-900 mb-2">
          $2,500<span className="text-xl text-slate-500 font-normal">/mo</span>
        </h3>
        <p className="text-slate-500 mb-8">
          Full autonomy for high-scale applications requiring massive
          parallelism.
        </p>

        <div className="space-y-4 mb-8">
          {[
            "Unlimited Shadow Agents",
            "Global Edge Deployment (140+ Regions)",
            "Enterprise SSO & Audit Logs",
            "Dedicated Slack Channel Support",
            "Custom Ingestion Engine Tuning",
            "99.99% Uptime SLA",
            "On-Premise Deployment Option",
            "Custom Behavior Modelling",
            "Advanced RBAC & Team Management",
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-slate-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
        <Link href="/contact">
          <button className="w-full py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
            Request Access
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

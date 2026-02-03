import { PageWrapper } from "@/components/PageWrapper";
import { PricingCard } from "@/components/PricingCard";
import { Link } from "wouter";


export default function Pricing() {
  return (
    <PageWrapper>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">
          The Scale Plan
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Designed for organizations where quality is mission-critical.
        </p>
      </div>

      <div className="pb-20">
        <PricingCard />
      </div>

      <div className="max-w-4xl mx-auto text-center glass rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-4">
          Need a custom proof of concept?
        </h2>
        <p className="text-slate-500 mb-8">
          We offer a 14-day pilot program for qualified enterprise teams. See
          how Shadow Agents handle your most complex flows.
        </p>
        <Link href="/contact">
          <button className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
            Contact Sales
          </button>
        </Link>
      </div>
    </PageWrapper>
  );
}

import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Hexagon } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Vision" },
  { href: "/migration", label: "Migration" },
  { href: "/infrastructure", label: "Network" },
  { href: "/pricing", label: "Scale" },
  { href: "/contact", label: "Contact", primary: true },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Hexagon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Ameriix</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={cn(
                    "text-sm font-medium cursor-pointer transition-all hover:text-primary relative py-1",
                    location === link.href ? "text-primary" : "text-slate-600",
                    link.primary && "px-5 py-2.5 bg-primary text-white hover:text-white rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
                  )}
                >
                  {link.label}
                  {location === link.href && !link.primary && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-2 glass rounded-2xl p-4 md:hidden flex flex-col gap-2"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "p-4 rounded-xl font-medium cursor-pointer transition-colors",
                    location === link.href ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-slate-50",
                    link.primary && "bg-primary text-white hover:bg-primary/90 mt-2 text-center"
                  )}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}

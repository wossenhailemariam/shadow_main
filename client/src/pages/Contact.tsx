import { PageWrapper } from "@/components/PageWrapper";
import { useCreateLead } from "@/hooks/use-leads";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const { mutate, isPending } = useCreateLead();
  
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: InsertLead) {
    mutate(data);
  }

  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Let's talk.</h1>
          <p className="text-xl text-slate-500 mb-8">
            Ready to upgrade your infrastructure? Fill out the form to connect directly with our engineering team via WhatsApp.
          </p>
          
          <div className="glass p-8 rounded-2xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Submit Request</h3>
                <p className="text-slate-500">We'll validate your requirements instantly.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Direct Connection</h3>
                <p className="text-slate-500">Redirects to a secure WhatsApp channel with a founder.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Onboarding</h3>
                <p className="text-slate-500">Get your API keys and first agent deployed in 24h.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-8 md:p-10 rounded-3xl"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" className="bg-white/50 border-slate-200 h-12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="jane@company.com" className="bg-white/50 border-slate-200 h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." className="bg-white/50 border-slate-200 h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="We need to simulate 10k users..." 
                        className="bg-white/50 border-slate-200 min-h-[120px] resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button 
                type="submit" 
                disabled={isPending}
                className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
              >
                {isPending ? (
                  <>
                    <Loader2 className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Request <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </Form>
        </motion.div>
      </div>

      {/* Office Locations (Extended Content) */}
      <section className="mt-32 py-20 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Global Engineering Hubs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { city: "San Francisco", addr: "101 Montgomery St, CA", phone: "+1 (415) 555-0123" },
            { city: "London", addr: "22 Bishopsgate, EC2N", phone: "+44 20 7946 0000" },
            { city: "Singapore", addr: "71 Robinson Rd, 068895", phone: "+65 6789 0000" }
          ].map((loc) => (
            <div key={loc.city} className="glass p-8 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-2">{loc.city}</h4>
              <p className="text-slate-500 text-sm mb-4">{loc.addr}</p>
              <div className="text-primary font-mono text-xs">{loc.phone}</div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

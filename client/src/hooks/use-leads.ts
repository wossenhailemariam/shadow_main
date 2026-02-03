import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertLead } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit lead");
      }

      return await res.json();
    },
    onSuccess: (data, variables) => {
      toast({
        title: "Message Sent",
        description: "Redirecting you to our secure channel...",
      });

      // Construct WhatsApp message
      const text = `*New Lead from Website*
Name: ${variables.name}
Company: ${variables.company}
Email: ${variables.email}
Message: ${variables.message}`;

      const waNumber = "+14694508987"; // Replace with actual number
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
      
      // Delay slightly for toast visibility
      setTimeout(() => {
        window.location.href = waUrl;
      }, 1500);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

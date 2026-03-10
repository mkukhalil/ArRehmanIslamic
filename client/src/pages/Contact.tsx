import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { api, type ContactMessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const mutation = useCreateContactMessage();
  
  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(api.contact.submit.input),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactMessageInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent Successfully",
          description: "Jazakallah Khair! We will get back to you shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
      }
    });
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display text-primary mb-6">Contact Us</h1>
          <p className="text-lg text-foreground/70">
            Have questions or want to register for a free trial? Reach out to us using the form below or via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary text-white p-8 rounded-3xl shadow-xl pattern-bg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/95"></div>
              <div className="relative z-10 space-y-8">
                <h3 className="text-2xl font-display font-bold text-accent mb-6">Get in Touch</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-white/70 mb-1">Phone / WhatsApp</h4>
                    <p className="font-medium">+1 (234) 567-8900</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-white/70 mb-1">Email</h4>
                    <p className="font-medium">info@alrehmanislamiccenter.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-white/70 mb-1">Location</h4>
                    <p className="font-medium">Global Online Classes<br/>Available 24/7</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/20">
                  <a 
                    href="https://wa.me/12345678900" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl font-bold bg-green-500 text-white hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border"
          >
            <h3 className="text-2xl font-bold text-primary mb-8">Send us a Message</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Full Name</label>
                  <input 
                    {...form.register("name")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Email Address</label>
                  <input 
                    {...form.register("email")}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Phone Number (with country code)</label>
                <input 
                  {...form.register("phone")}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  placeholder="+1 234 567 8900"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message / Inquiry</label>
                <textarea 
                  {...form.register("message")}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                  placeholder="I would like to register for a free trial..."
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={mutation.isPending}
                className="px-8 py-4 rounded-xl font-bold bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/95 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all w-full md:w-auto"
              >
                {mutation.isPending ? "Sending..." : "Submit Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
}

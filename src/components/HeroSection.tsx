import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import heroImg from "@/assets/hero-cleaning.jpg";


const HeroSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Request sent!", description: "We'll get back to you as soon as possible." });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Clean interior space" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero/85" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative container max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-24 lg:py-32">
        {/* Left copy */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/10 px-3.5 py-1.5 rounded-full mb-8">
            <MapPin className="w-3.5 h-3.5" /> Calgary, Alberta
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-hero-foreground mb-6 text-balance">
            Residential, Commercial & Construction Cleaning
          </h1>
          <p className="text-lg text-hero-foreground/60 max-w-lg mb-8 leading-relaxed">
            Reliable Clean Services provides cleaning for homes, offices, and construction sites. We work with homeowners, builders, contractors, and property managers across Calgary.
          </p>

          {/* Phone number */}
          <a
            href="tel:5878897540"
            className="inline-flex items-center gap-2.5 text-hero-foreground/80 hover:text-primary transition-colors mb-8"
          >
            <span className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary" />
            </span>
            <span className="font-heading font-semibold text-lg">(587) 889-7540</span>
          </a>

          <div className="hidden lg:flex items-center gap-6 text-sm text-hero-foreground/40">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Residential
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Commercial
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Post-Construction
            </span>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-elevated p-8 space-y-4 border border-border/50">
            <div className="text-center mb-2">
              <h2 className="font-heading font-bold text-xl text-card-foreground">Request a Quote</h2>
              <p className="text-sm text-muted-foreground mt-1">Tell us about your cleaning needs</p>
            </div>
            <Input placeholder="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-11" />
            <Input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-11" />
            <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-11" />
            <Textarea placeholder="Tell us about your cleaning needs..." rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" className="w-full text-base py-5 font-semibold rounded-xl">
              Submit Request
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

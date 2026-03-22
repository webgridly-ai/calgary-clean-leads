import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import heroImg from "@/assets/hero-cleaning.jpg";

const HeroSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request sent!", description: "We'll get back to you as soon as possible." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative min-h-screen pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Clean interior space" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero/80" />
      </div>

      <div className="relative container flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-28">
        {/* Left copy */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
            <MapPin className="w-3.5 h-3.5" /> Calgary, Alberta
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-hero-foreground mb-6 text-balance">
            Residential & Construction Cleaning in Calgary
          </h1>
          <p className="text-lg text-hero-foreground/70 max-w-lg mb-8">
            Reliable Clean Services provides cleaning for homes and construction sites. We work with homeowners, builders, contractors, and property managers across Calgary.
          </p>
        </motion.div>

        {/* Right form */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-elevated p-8 space-y-4">
            <div className="text-center mb-2">
              <h2 className="font-heading font-bold text-xl text-card-foreground">Request a Quote</h2>
              <p className="text-sm text-muted-foreground">Tell us about your cleaning needs</p>
            </div>
            <Input placeholder="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <Textarea placeholder="Tell us about your cleaning needs..." rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" className="w-full text-base py-5 font-semibold">
              Submit Request
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

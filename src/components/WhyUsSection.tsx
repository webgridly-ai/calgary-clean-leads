import { motion } from "framer-motion";
import { Clock, Eye, Home, HardHat, Building2, MapPin } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Reliable Service", desc: "We focus on showing up on time and completing every job as scheduled." },
  { icon: Eye, title: "Attention to Detail", desc: "We take a thorough approach to every cleaning task, large or small." },
  { icon: Home, title: "Residential Cleaning", desc: "Cleaning services for homeowners, tenants, and property managers." },
  { icon: HardHat, title: "Construction Cleaning", desc: "Post-construction cleanup for builders, contractors, and developers." },
  { icon: Building2, title: "Commercial Cleaning", desc: "Offices, retail spaces, and commercial facilities cleaned to a high standard." },
  { icon: MapPin, title: "Calgary-Based", desc: "Locally operated and serving the Calgary, Alberta area." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-24 lg:py-32 relative overflow-hidden">
    {/* Background depth */}
    <div className="absolute inset-0 bg-section-alt" />
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/[0.04] blur-3xl" />

    <div className="relative container max-w-6xl">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Why Choose Us</span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-5 text-foreground leading-tight">
          What We Bring to Every Job
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">A few reasons to consider Reliable Clean Services for your next project.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="bg-card rounded-2xl p-7 border border-border/40 hover:border-primary/15 hover:shadow-card transition-all duration-400 group"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/8 group-hover:bg-primary/12 flex items-center justify-center mb-5 transition-colors">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-base mb-2 text-card-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;

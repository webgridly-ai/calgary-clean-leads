import { motion } from "framer-motion";
import { Clock, Eye, Home, HardHat, MapPin, MessageSquare } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Reliable Service", desc: "We focus on showing up on time and completing every job as scheduled." },
  { icon: Eye, title: "Attention to Detail", desc: "We take a thorough approach to every cleaning task, large or small." },
  { icon: Home, title: "Residential Cleaning", desc: "Cleaning services for homeowners, tenants, and property managers." },
  { icon: HardHat, title: "Construction Cleaning", desc: "Post-construction cleanup for builders, contractors, and developers." },
  { icon: MapPin, title: "Calgary-Based", desc: "Locally operated and serving the Calgary, Alberta area." },
  { icon: MessageSquare, title: "Clear Communication", desc: "Straightforward quoting and scheduling with no surprises." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-20 lg:py-28 bg-section-alt">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why Choose Us</span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-3 mb-4 text-foreground">
          What We Bring to Every Job
        </h2>
        <p className="text-muted-foreground">A few reasons to consider Reliable Clean Services for your next project.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2 text-card-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;

import { motion } from "framer-motion";
import { Home, HardHat, Building2, Sparkles } from "lucide-react";
import residentialImg from "@/assets/residential-cleaning.jpg";
import constructionImg from "@/assets/construction-cleaning.jpg";
import commercialImg from "@/assets/commercial-cleaning.jpg";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Regular upkeep, deep cleans, and move-in/move-out cleaning for homes and rental properties.",
    image: residentialImg,
    tags: ["Homes", "Rentals", "Move-in/out"],
  },
  {
    icon: HardHat,
    title: "Construction Cleaning",
    description:
      "Post-construction cleanup including debris removal, dust control, and final detailing for builders and contractors.",
    image: constructionImg,
    tags: ["Post-build", "Debris removal", "Final detail"],
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Ongoing and one-time cleaning for offices, retail spaces, clinics, and commercial facilities.",
    image: commercialImg,
    tags: ["Offices", "Retail", "Facilities"],
  },
];

const extras = [
  {
    icon: Building2,
    title: "Property Management",
    desc: "Turnover cleaning between tenants to help keep units ready for new occupants.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "Thorough top-to-bottom cleaning for spaces that need extra attention.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
    {/* Subtle background tint */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-section-alt/50 to-background" />
    
    {/* Accent shape */}
    <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl" />
    <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-accent/[0.03] blur-3xl" />

    <div className="relative container max-w-6xl">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
          Our Services
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-5 text-foreground leading-tight">
          Cleaning for Every Space
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
          Residential, commercial, and post-construction cleaning services across
          Calgary — tailored to each project.
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-card-foreground">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-primary bg-primary/5 border border-primary/10 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional services */}
      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {extras.map((e, i) => (
          <motion.div
            key={e.title}
            className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/30 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <e.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-card-foreground mb-1">
                {e.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {e.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

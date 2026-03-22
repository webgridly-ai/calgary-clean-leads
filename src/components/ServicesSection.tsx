import { motion } from "framer-motion";
import { Home, HardHat, Building2, Sparkles } from "lucide-react";
import residentialImg from "@/assets/residential-cleaning.jpg";
import constructionImg from "@/assets/construction-cleaning.jpg";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Cleaning services for homes — including regular upkeep, deep cleans, and move-in/move-out cleaning.",
    image: residentialImg,
  },
  {
    icon: HardHat,
    title: "Construction Cleaning",
    description: "Post-construction cleanup for builders and contractors — debris removal, dust control, and final detailing.",
    image: constructionImg,
  },
];

const extras = [
  { icon: Building2, title: "Property Management", desc: "Turnover cleaning between tenants to help keep units ready for new occupants." },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Thorough top-to-bottom cleaning for spaces that need extra attention." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Services</span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-3 mb-4 text-foreground">
          Cleaning for Homes & Construction Sites
        </h2>
        <p className="text-muted-foreground">We provide cleaning services for residential properties and construction sites across Calgary.</p>
      </motion.div>

      {/* Main services */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="group rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elevated transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="h-56 overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-card-foreground">{s.title}</h3>
              <p className="text-muted-foreground">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extra services */}
      <div className="grid sm:grid-cols-2 gap-6">
        {extras.map((e, i) => (
          <motion.div
            key={e.title}
            className="flex items-start gap-4 p-6 rounded-xl bg-secondary/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <e.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-card-foreground mb-1">{e.title}</h4>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

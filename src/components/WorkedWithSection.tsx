import { motion } from "framer-motion";
import { Building2, Wrench, Fuel, Stethoscope } from "lucide-react";

const clients = [
  { name: "Keller Construction Inc.", type: "Construction", icon: Building2 },
  { name: "Tim Hortons", type: "Renovation Projects", icon: Wrench },
  { name: "A&W", type: "Renovation Projects", icon: Wrench },
  { name: "Petro-Canada", type: "Gas Station Projects", icon: Fuel },
  { name: "Physiotherapy Clinics", type: "Healthcare Facilities", icon: Stethoscope },
  { name: "Dental Clinics", type: "Healthcare Facilities", icon: Stethoscope },
];

const WorkedWithSection = () => (
  <section id="worked-with" className="py-24 lg:py-32 bg-background relative">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container max-w-5xl">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Previous Work</span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-5 text-foreground leading-tight">
          Companies We've Worked With
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Cleaning services across construction sites, renovation projects, retail locations, and clinical environments.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            className="bg-card border border-border/40 rounded-2xl p-5 flex items-center gap-4 hover:border-primary/15 hover:shadow-soft transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
              <client.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-card-foreground">{client.name}</p>
              <p className="text-xs text-muted-foreground">{client.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkedWithSection;

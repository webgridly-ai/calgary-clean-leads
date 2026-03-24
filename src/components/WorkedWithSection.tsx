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
  <section id="worked-with" className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Previous Work</span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-3 mb-4 text-foreground">
          Companies & Environments We've Worked With
        </h2>
        <p className="text-muted-foreground">
          We've provided cleaning services across construction sites, renovation projects, retail locations, and clinical environments.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <client.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-heading font-bold text-card-foreground">{client.name}</p>
              <p className="text-xs text-muted-foreground">{client.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkedWithSection;

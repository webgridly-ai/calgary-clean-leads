import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 lg:py-28 bg-primary">
    <div className="container text-center">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary-foreground mb-4">
          Need a Cleaning Quote?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Reach out to discuss your residential or construction cleaning needs. We serve Calgary and the surrounding area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base font-semibold gap-2"
          >
            <a href="#contact">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-base font-semibold gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="tel:+14035551234">
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const placeholders = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 lg:py-28 bg-section-alt">
    <div className="container">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-3 mb-4 text-foreground">
          Customer Feedback
        </h2>
        <p className="text-muted-foreground">This section is reserved for real client reviews that can be added once available.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {placeholders.map((p, i) => (
          <motion.div
            key={p.id}
            className="bg-card rounded-2xl p-6 shadow-soft flex flex-col"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-4">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground flex-1 mb-5 leading-relaxed italic">
              "Quote placeholder for a future customer testimonial."
            </p>
            <div>
              <p className="font-heading font-bold text-card-foreground text-sm">Customer Name</p>
              <p className="text-xs text-muted-foreground">Role or Service Type</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;

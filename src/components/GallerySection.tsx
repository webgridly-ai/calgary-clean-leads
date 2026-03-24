import { useState } from "react";
import { motion } from "framer-motion";
import galleryBeforeCooler from "@/assets/gallery-before-cooler.jpg";
import galleryAfterCooler from "@/assets/gallery-after-cooler.jpg";
import galleryConstructionSite from "@/assets/gallery-construction-site.jpg";

type BeforeAfterCardProps = {
  before: string;
  after: string;
  label: string;
  caption: string;
  beforeAlt: string;
  afterAlt: string;
};

const BeforeAfterCard = ({ before, after, label, caption, beforeAlt, afterAlt }: BeforeAfterCardProps) => {
  const [view, setView] = useState<"after" | "before">("after");

  return (
    <motion.div
      className="rounded-2xl overflow-hidden bg-card border border-border shadow-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={view === "after" ? after : before}
          alt={view === "after" ? afterAlt : beforeAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setView("before")}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
              view === "before"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setView("after")}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
              view === "after"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            After
          </button>
        </div>
        <span className="text-xs font-semibold text-primary uppercase tracking-widest">{label}</span>
        <p className="text-sm text-muted-foreground mt-1">{caption}</p>
      </div>
    </motion.div>
  );
};

type GalleryCardProps = {
  src: string;
  alt: string;
  label: string;
  caption: string;
};

const GalleryCard = ({ src, alt, label, caption }: GalleryCardProps) => (
  <motion.div
    className="rounded-2xl overflow-hidden bg-card border border-border shadow-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <span className="text-xs font-semibold text-primary uppercase tracking-widest">{label}</span>
      <p className="text-sm text-muted-foreground mt-1">{caption}</p>
    </div>
  </motion.div>
);

const GallerySection = () => (
  <section id="gallery" className="py-20 lg:py-28 bg-background">
    <div className="container max-w-5xl">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Gallery</span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-3 mb-4 text-foreground">
          A Look at Clean, Finished Spaces
        </h2>
        <p className="text-muted-foreground">
          Real project photos showing the results of our post-construction and commercial cleaning work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured before/after pair */}
        <BeforeAfterCard
          before={galleryBeforeCooler}
          after={galleryAfterCooler}
          label="Commercial Cleanup"
          caption="Cooler wall glass and surface cleaning"
          beforeAlt="Cooler wall before cleaning with dust and construction residue"
          afterAlt="Cooler wall after cleaning with spotless glass and polished surfaces"
        />

        {/* Standalone project photos */}
        <GalleryCard
          src={galleryAfterCooler}
          alt="Clean commercial cooler display with sparkling glass doors"
          label="Post-Construction"
          caption="Commercial retail cooler detailing"
        />

        <GalleryCard
          src={galleryConstructionSite}
          alt="Active construction site interior before cleanup with equipment and debris"
          label="In Progress"
          caption="Retail space before post-construction cleanup"
        />
      </div>

      <motion.p
        className="text-center text-sm text-muted-foreground mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        More project photos coming soon.
      </motion.p>
    </div>
  </section>
);

export default GallerySection;

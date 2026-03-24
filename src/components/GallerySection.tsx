import { motion } from "framer-motion";
import galleryBeforeCooler from "@/assets/gallery-before-cooler.jpg";
import galleryAfterCooler from "@/assets/gallery-after-cooler.jpg";
import galleryConstructionSite from "@/assets/gallery-construction-site.jpg";
import galleryCounterBefore from "@/assets/gallery-counter-before.jpg";
import galleryCoolerAreaBefore from "@/assets/gallery-cooler-area-before.jpg";
import galleryBackroomBefore from "@/assets/gallery-backroom-before.jpg";
import galleryServiceCounter from "@/assets/gallery-service-counter.jpg";
import galleryCoolerDoors from "@/assets/gallery-cooler-doors.jpg";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay },
});

const images = [
  { src: galleryAfterCooler, alt: "Cleaned cooler wall with sparkling glass doors in a commercial retail space" },
  { src: galleryCoolerDoors, alt: "Commercial cooler doors cleaned and ready for stocking" },
  { src: galleryConstructionSite, alt: "Retail interior during post-construction cleanup phase" },
  { src: galleryServiceCounter, alt: "Service counter area with protective coverings during renovation" },
  { src: galleryBeforeCooler, alt: "Cooler wall area before detailed cleaning" },
  { src: galleryCounterBefore, alt: "Front counter area during renovation with protective coverings" },
  { src: galleryCoolerAreaBefore, alt: "Cooler wall area with construction materials awaiting cleanup" },
  { src: galleryBackroomBefore, alt: "Back prep area with construction dust before detail cleaning" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 lg:py-32 bg-background">
    <div className="container max-w-6xl">
      <motion.div className="text-center max-w-xl mx-auto mb-16" {...fade()}>
        <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
          Our Work
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4 text-foreground leading-tight">
          Project Gallery
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          A selection of photos from our cleaning and post-construction projects.
        </p>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="break-inside-avoid overflow-hidden rounded-2xl"
            {...fade(i * 0.05)}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

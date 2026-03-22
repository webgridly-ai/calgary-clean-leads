import { motion } from "framer-motion";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";
import galleryConstruction from "@/assets/gallery-construction.jpg";
import galleryFloors from "@/assets/gallery-floors.jpg";
import galleryWindows from "@/assets/gallery-windows.jpg";

const images = [
  { src: galleryKitchen, alt: "Clean kitchen interior", span: "md:col-span-2 md:row-span-2" },
  { src: galleryBathroom, alt: "Clean bathroom interior" },
  { src: galleryFloors, alt: "Polished hardwood floors" },
  { src: galleryConstruction, alt: "Empty room after construction cleanup" },
  { src: galleryWindows, alt: "Bright room with clean windows" },
  { src: galleryOffice, alt: "Clean office space" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 lg:py-28 bg-background">
    <div className="container">
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
        <p className="text-muted-foreground">This section is designed for real project photos to be added later.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            className={`overflow-hidden rounded-xl ${img.span || ""}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-[180px]"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

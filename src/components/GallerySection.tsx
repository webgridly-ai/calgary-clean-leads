import { motion } from "framer-motion";
import galleryBeforeCooler from "@/assets/gallery-before-cooler.jpg";
import galleryAfterCooler from "@/assets/gallery-after-cooler.jpg";
import galleryConstructionSite from "@/assets/gallery-construction-site.jpg";
import galleryCounterBefore from "@/assets/gallery-counter-before.jpg";
import galleryCoolerAreaBefore from "@/assets/gallery-cooler-area-before.jpg";
import galleryBackroomBefore from "@/assets/gallery-backroom-before.jpg";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay },
});

const GalleryImage = ({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) => (
  <motion.figure className={`group relative ${className}`} {...fade(0.1)}>
    <div className="overflow-hidden rounded-2xl h-full">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
    <figcaption className="mt-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
      {caption}
    </figcaption>
  </motion.figure>
);

const GallerySection = () => (
  <section id="gallery" className="py-24 lg:py-32 bg-background">
    <div className="container max-w-6xl">
      {/* Header */}
      <motion.div className="text-center max-w-xl mx-auto mb-14" {...fade()}>
        <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
          Our Work
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-3 text-foreground leading-tight">
          A Look at Clean, Finished Spaces
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Real results from our post-construction and commercial cleaning projects.
        </p>
      </motion.div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
        {/* Hero — large featured image */}
        <GalleryImage
          src={galleryAfterCooler}
          alt="Finished cooler wall with sparkling clean glass doors in a commercial retail space"
          caption="Cooler Wall Detailing — Final Result"
          className="md:col-span-7 aspect-[4/3] md:aspect-auto md:min-h-[420px]"
        />

        {/* Before / After pair stacked */}
        <div className="md:col-span-5 flex flex-col gap-4 lg:gap-5">
          <motion.div className="relative" {...fade(0.15)}>
            <div className="overflow-hidden rounded-2xl">
              <div className="grid grid-cols-2 gap-0.5 bg-border rounded-2xl overflow-hidden">
                <div className="relative">
                  <img
                    src={galleryBeforeCooler}
                    alt="Cooler wall before cleaning with construction dust and residue"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 bg-foreground/70 text-background text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={galleryAfterCooler}
                    alt="Cooler wall after cleaning with spotless glass surfaces"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Before &amp; After — Commercial Cleanup
            </p>
          </motion.div>

          <GalleryImage
            src={galleryCounterBefore}
            alt="Front counter area during renovation with protective coverings"
            caption="Front Counter Cleanup"
            className="flex-1 min-h-[180px]"
          />
        </div>

        {/* Bottom row — 3 supporting images */}
        <GalleryImage
          src={galleryConstructionSite}
          alt="Retail interior during post-construction phase with equipment and debris"
          caption="Post-Construction Site"
          className="md:col-span-4 aspect-[4/3]"
        />
        <GalleryImage
          src={galleryCoolerAreaBefore}
          alt="Cooler wall area with construction materials awaiting cleanup"
          caption="Retail Floor Cleanup"
          className="md:col-span-4 aspect-[4/3]"
        />
        <GalleryImage
          src={galleryBackroomBefore}
          alt="Back prep area with construction dust and supplies before detail cleaning"
          caption="Prep Area Detailing"
          className="md:col-span-4 aspect-[4/3]"
        />
      </div>
    </div>
  </section>
);

export default GallerySection;

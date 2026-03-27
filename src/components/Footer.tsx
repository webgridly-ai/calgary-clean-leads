const Footer = () => (
  <footer className="bg-foreground py-14 relative">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container max-w-6xl text-center">
      <p className="font-heading font-bold text-xl text-background mb-3">
        ReliableClean Services
      </p>
      <p className="text-sm text-background/50 mb-2">
        Calgary, Alberta · Residential, Commercial & Construction Cleaning
      </p>
      <p className="text-sm text-background/40 mt-4">
        <a href="tel:5878897540" className="hover:text-primary transition-colors">(587) 889-7540</a>
      </p>
      <p className="text-xs text-background/25 mt-6">
        © {new Date().getFullYear()} Reliable Clean Services. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

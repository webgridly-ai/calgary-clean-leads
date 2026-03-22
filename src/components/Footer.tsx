const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container text-center">
      <p className="font-heading font-bold text-lg text-background mb-2">
        Reliable<span className="text-primary">Clean</span> Services
      </p>
      <p className="text-sm text-background/50">
        Calgary, Alberta · Residential & Construction Cleaning
      </p>
      <p className="text-xs text-background/30 mt-4">
        © {new Date().getFullYear()} Reliable Clean Services. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

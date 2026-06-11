const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/labcibe",
      logo: "/Logo/linkedin.svg",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/labcibeuna",
      logo: "/Logo/facebook-icon.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/labcibe_una",
      logo: "/Logo/instagram-icon.svg",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6">
          {/* UNA Logo */}
          <div className="mb-2">
            <img
              src="/Logo/UNA_rojo_gris.webp"
              alt="Universidad Nacional"
              className="h-16 w-auto opacity-90"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.name}`}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={social.logo}
                    alt={`${social.name} logo`}
                    className="w-5 h-5"
                  />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-0.5 bg-gradient-to-r from-transparent from-[2%] via-primary-foreground/20 via-50% to-transparent to-[98%]" />

          {/* Copyright */}
          <p className="text-sm text-center text-primary-foreground/80">
            © {currentYear} Laboratorio de I+D+i en Ciberseguridad
            (LabCIBE-UNA). Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

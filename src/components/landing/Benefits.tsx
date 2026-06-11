import {
  Microscope,
  HeartHandshake,
  GraduationCap,
  Radar,
} from "lucide-react";

const impact = [
  {
    icon: Microscope,
    title: "Investigación activa",
    text: "Generamos conocimiento aplicado en ciberseguridad desde la academia, con impacto en políticas públicas y servicios digitales.",
  },
  {
    icon: HeartHandshake,
    title: "Servicio a la comunidad",
    text: "Ofrecemos canales abiertos a la ciudadanía para reportar fraudes y acceder a información confiable sobre amenazas digitales.",
  },
  {
    icon: GraduationCap,
    title: "Formación de talento",
    text: "Acompañamos a estudiantes y profesionales en el desarrollo de capacidades especializadas en ciberseguridad.",
  },
  {
    icon: Radar,
    title: "Detección temprana",
    text: "Monitoreamos tendencias y amenazas emergentes para alertar a la comunidad y mitigar incidentes con rapidez.",
  },
];

const Benefits = () => {
  return (
    <section className="pt-40 pb-40 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-[-1px] left-0 right-0 rotate-180">
        <svg
          className="w-full h-auto block"
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 180L60 165C120 150 240 120 360 105C480 90 600 90 720 97.5C840 105 960 120 1080 127.5C1200 135 1320 135 1380 135L1440 135V180H1380C1320 180 1200 180 1080 180C960 180 840 180 720 180C600 180 480 180 360 180C240 180 120 180 60 180H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-foreground rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-foreground rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Nuestro impacto
          </h2>
          <div className="w-24 h-1 bg-primary-foreground/80 mx-auto rounded-full animate-in fade-in duration-700 delay-100" />
          <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mt-6 animate-in fade-in duration-700 delay-150">
            Cómo el trabajo del LabCIBE-UNA aporta a la seguridad digital del
            país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {impact.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDuration: "700ms",
                  animationDelay: `${index * 100 + 200}ms`,
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary-foreground text-lg font-semibold mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/85 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-[-1px] left-0 right-0">
        <svg
          className="w-full h-auto block"
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 180L60 165C120 150 240 120 360 105C480 90 600 90 720 97.5C840 105 960 120 1080 127.5C1200 135 1320 135 1380 135L1440 135V180H1380C1320 180 1200 180 1080 180C960 180 840 180 720 180C600 180 480 180 360 180C240 180 120 180 60 180H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Benefits;

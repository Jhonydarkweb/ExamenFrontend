import { Card } from "@/components/ui/card";
import {
  Bug,
  Search,
  Lock,
  GraduationCap,
  Wrench,
  Globe2,
} from "lucide-react";

const areas = [
  {
    icon: Bug,
    title: "Análisis de amenazas",
    description:
      "Estudio y detección de phishing, malware y campañas dirigidas contra la ciudadanía y organizaciones costarricenses.",
  },
  {
    icon: Search,
    title: "Respuesta a incidentes y forense",
    description:
      "Atención de incidentes de ciberseguridad y análisis forense digital con metodologías académicas y herramientas especializadas.",
  },
  {
    icon: Lock,
    title: "Privacidad y protección de datos",
    description:
      "Investigación aplicada en preservación de la privacidad y cumplimiento normativo en el manejo de información sensible.",
  },
  {
    icon: GraduationCap,
    title: "Educación y concientización",
    description:
      "Formación de talento universitario y campañas de concientización dirigidas a la comunidad para prevenir fraudes.",
  },
  {
    icon: Wrench,
    title: "Desarrollo de herramientas",
    description:
      "Creación de plataformas, prototipos y herramientas científicas que fortalecen la seguridad digital del país.",
  },
  {
    icon: Globe2,
    title: "Colaboración interinstitucional",
    description:
      "Trabajo conjunto con universidades, sector público y aliados regionales para enfrentar amenazas cibernéticas.",
  },
];

const ResearchAreas = () => {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Líneas de investigación
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trabajamos en áreas estratégicas que combinan investigación
            académica, desarrollo tecnológico y servicio a la comunidad para
            fortalecer la ciberseguridad nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.title}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;

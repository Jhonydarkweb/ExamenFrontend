import { Card } from "@/components/ui/card";
import {
  ShieldAlert,
  Bell,
  BookOpen,
  Users,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { REPORTS_URL } from "@/lib/config";

interface Project {
  icon: typeof ShieldAlert;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
    external?: boolean;
  };
  featured?: boolean;
}

const projects: Project[] = [
  {
    icon: ShieldAlert,
    title: "Plataforma de reporte de fraudes",
    description:
      "Herramienta pública para que cualquier persona reporte intentos de phishing y otros fraudes digitales. Los reportes alimentan investigaciones del laboratorio y alertas a la comunidad.",
    cta: {
      label: "Reportar un fraude",
      href: REPORTS_URL,
    },
    featured: true,
  },
  {
    icon: Bell,
    title: "Alertas y boletines",
    description:
      "Publicamos alertas y reportes periódicos sobre amenazas activas, campañas de phishing y buenas prácticas de seguridad digital.",
    cta: {
      label: "Ver alertas recientes",
      href: "https://www.linkedin.com/company/labcibe/",
      external: true,
    },
  },
  {
    icon: BookOpen,
    title: "Investigación académica",
    description:
      "Proyectos de investigación universitaria en privacidad, análisis forense, detección de amenazas y respuesta a incidentes.",
    cta: {
      label: "Conocer al laboratorio",
      href: "#about",
    },
  },
  {
    icon: Users,
    title: "Formación y comunidad",
    description:
      "Talleres, charlas y actividades que forman talento en ciberseguridad y promueven una cultura de prevención en línea.",
    cta: {
      label: "Escribir al laboratorio",
      href: "mailto:labcibe@una.ac.cr",
      external: true,
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Proyectos del laboratorio
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Iniciativas activas que ponemos al servicio de la ciudadanía, las
            instituciones y la comunidad académica de Costa Rica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const isExternal = project.cta.external;
            return (
              <Card
                key={project.title}
                className={`p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border flex flex-col ${
                  project.featured ? "ring-2 ring-primary/20" : ""
                }`}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    {project.featured && (
                      <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                        Destacado
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.cta.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      {project.cta.label}
                      {isExternal ? (
                        <ExternalLink className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

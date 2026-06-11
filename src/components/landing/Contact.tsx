import { Mail, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contáctenos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Si desea más información sobre nuestras investigaciones o proyectos
            en ciberseguridad, puede escribirnos a:
          </p>
        </div>

        <div className="p-8 bg-gradient-card rounded-lg shadow-medium text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6 mr-2">
            <Mail className="w-5 h-5 text-primary" />
          </div>

          <a
            href="mailto:labcibe@una.ac.cr"
            className="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors duration-200 inline-block mb-8"
          >
            labcibe@una.ac.cr
          </a>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Building2 className="w-4 h-4 flex-shrink-0" />
            <p className="text-base">
              Universidad Nacional (UNA) – Laboratorio de I+D+i en
              Ciberseguridad (LabCIBE)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

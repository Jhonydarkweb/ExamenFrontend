import labImage from "@/assets/LabCIBE-UNA.jpg";

const AboutLab = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 hover:scale-105 transition-transform duration-300">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={labImage}
                alt="Laboratorio LabCIBE-UNA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Acerca del LabCIBE-UNA
            </h2>
            <div className="w-24 h-1 bg-secondary mb-8 rounded-full" />

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              El Laboratorio de Investigación, Desarrollo e Innovación en Ciberseguridad (LabCIBE-UNA) tiene como misión impulsar proyectos en ciberseguridad, mediante el uso de recurso humano especializado y tecnología científica en la Universidad Nacional (UNA).
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Su trabajo abarca la atención de incidentes, la preservación de la privacidad y el desarrollo de herramientas que fortalezcan la seguridad digital del país.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                #LabCIBEUNA
              </span>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                #Ciberseguridad
              </span>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                #Investigación
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLab;

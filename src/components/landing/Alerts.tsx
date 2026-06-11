import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";
import alertsImage from "@/assets/Image.jpg";

const Alerts = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Manténgase informado
            </h2>
            <div className="w-24 h-1 bg-accent mb-8 rounded-full" />

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              El LabCIBE-UNA publica periódicamente alertas, consejos y reportes
              de tendencias en ciberseguridad.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Puede suscribirse para recibir notificaciones sobre incidentes
              recientes y buenas prácticas de seguridad digital.
            </p>

            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/labcibe/",
                  "_blank"
                )
              }
            >
              <Bell className="w-5 h-5 mr-2" />
              Ver alertas recientes
            </Button>
          </div>

          {/* Image card */}
          <div>
            <Card className="hover:scale-105 overflow-hidden shadow-medium hover:shadow-lg transition-all duration-300 border-border">
              <img
                src={alertsImage}
                alt="Sistema de alertas de ciberseguridad"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alerts;

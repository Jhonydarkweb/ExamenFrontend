import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowLeft, FileSearch, Loader2 } from "lucide-react";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getFraudReports, type FraudReport } from "@/lib/fraud";

const formatDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleString("es-CR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const Reportes = () => {
  const [reports, setReports] = useState<FraudReport[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    let active = true;

    getFraudReports()
      .then((data) => {
        if (!active) return;
        setReports(data);
        setStatus("success");
      })
      .catch(() => {
        if (!active) return;
        setStatus("error");
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main
        id="main-content"
        className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <FileSearch className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Reportes de fraude
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Listado público de los reportes de intentos de fraude enviados
              por la comunidad.
            </p>
          </div>

          {status === "loading" && (
            <div className="flex flex-col items-center gap-3 text-muted-foreground py-16">
              <Loader2 className="w-8 h-8 animate-spin" />
              <p>Cargando reportes...</p>
            </div>
          )}

          {status === "error" && (
            <Card className="p-8 text-center border-destructive/30 bg-destructive/5">
              <AlertCircle className="w-8 h-8 text-destructive mx-auto mb-3" />
              <p className="text-destructive font-medium mb-1">
                No se pudieron cargar los reportes.
              </p>
              <p className="text-muted-foreground text-sm">
                Verifique su conexión o intente nuevamente más tarde.
              </p>
            </Card>
          )}

          {status === "success" && reports.length === 0 && (
            <Card className="p-8 text-center bg-gradient-card border-border">
              <p className="text-muted-foreground">
                Aún no hay reportes registrados.
              </p>
            </Card>
          )}

          {status === "success" && reports.length > 0 && (
            <div className="space-y-4">
              {reports.map((report) => (
                <Card
                  key={report.id}
                  className="p-6 bg-gradient-card border-border"
                >
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-lg text-card-foreground">
                      {report.impostorDetails}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Contacto:
                      </span>{" "}
                      {report.contactInfo}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Comentarios:
                      </span>{" "}
                      {report.comments}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {formatDate(report.createdAt)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/reportar-estafa"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a reportar un fraude
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reportes;

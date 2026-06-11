import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  CheckCircle2,
  Loader2,
  ShieldAlert,
} from "lucide-react";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createFraudReport, type FraudReportInput } from "@/lib/fraud";

type FormErrors = Partial<Record<keyof FraudReportInput, string>>;

const initialFormData: FraudReportInput = {
  impostorDetails: "",
  contactInfo: "",
  comments: "",
};

const REQUIRED_MESSAGE = "Este campo es obligatorio.";

const validate = (data: FraudReportInput): FormErrors => {
  const errors: FormErrors = {};
  if (!data.impostorDetails.trim()) {
    errors.impostorDetails = REQUIRED_MESSAGE;
  }
  if (!data.contactInfo.trim()) {
    errors.contactInfo = REQUIRED_MESSAGE;
  }
  if (!data.comments.trim()) {
    errors.comments = REQUIRED_MESSAGE;
  }
  return errors;
};

const ReportarFraude = () => {
  const [formData, setFormData] = useState<FraudReportInput>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange =
    (field: keyof FraudReportInput) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");
    try {
      await createFraudReport(formData);
      setFormData(initialFormData);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main
        id="main-content"
        className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <ShieldAlert className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Reportar un fraude
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete el siguiente formulario con la información del intento
              de fraude que recibió. Su reporte ayuda al laboratorio a alertar
              a la comunidad.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Todos los campos son obligatorios.
            </p>
          </div>

          <Card className="p-6 sm:p-8 bg-gradient-card border-border">
            {status === "success" ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  ¡Reporte enviado con éxito!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Gracias por ayudarnos a proteger a la comunidad. Su reporte
                  fue registrado correctamente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/reportes"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Ver reportes
                  </Link>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => setStatus("idle")}
                  >
                    Enviar otro reporte
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label
                    htmlFor="impostorDetails"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Detalles del impostor
                  </label>
                  <textarea
                    id="impostorDetails"
                    rows={3}
                    value={formData.impostorDetails}
                    onChange={handleChange("impostorDetails")}
                    aria-invalid={Boolean(errors.impostorDetails)}
                    aria-describedby={
                      errors.impostorDetails
                        ? "impostorDetails-error"
                        : undefined
                    }
                    placeholder="Nombre, alias, empresa o cualquier dato que identifique al impostor"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  {errors.impostorDetails && (
                    <p
                      id="impostorDetails-error"
                      className="mt-1.5 text-sm text-destructive"
                    >
                      {errors.impostorDetails}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contactInfo"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Número, correo o usuario desde el que contactó
                  </label>
                  <input
                    id="contactInfo"
                    type="text"
                    value={formData.contactInfo}
                    onChange={handleChange("contactInfo")}
                    aria-invalid={Boolean(errors.contactInfo)}
                    aria-describedby={
                      errors.contactInfo ? "contactInfo-error" : undefined
                    }
                    placeholder="Ej. +506 8888-8888, correo@ejemplo.com o @usuario"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  {errors.contactInfo && (
                    <p
                      id="contactInfo-error"
                      className="mt-1.5 text-sm text-destructive"
                    >
                      {errors.contactInfo}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="comments"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Comentarios del caso
                  </label>
                  <textarea
                    id="comments"
                    rows={5}
                    value={formData.comments}
                    onChange={handleChange("comments")}
                    aria-invalid={Boolean(errors.comments)}
                    aria-describedby={
                      errors.comments ? "comments-error" : undefined
                    }
                    placeholder="Describa qué sucedió, qué le solicitaron, montos involucrados, etc."
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  {errors.comments && (
                    <p
                      id="comments-error"
                      className="mt-1.5 text-sm text-destructive"
                    >
                      {errors.comments}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                    <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p>
                      No se pudo enviar el reporte. Verifique su conexión e
                      intente nuevamente.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar reporte"
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportarFraude;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Building2,
  Compass,
  Handshake,
  Newspaper,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ElementType;
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué es LabCIBE-UNA?",
    answer:
      "El Laboratorio de Investigación, Desarrollo e Innovación en Ciberseguridad (LabCIBE-UNA) es un laboratorio de la Universidad Nacional de Costa Rica dedicado a impulsar proyectos académicos y de servicio en ciberseguridad. Combina recurso humano especializado, investigación científica y desarrollo tecnológico para fortalecer la seguridad digital del país.",
    icon: Building2,
  },
  {
    question: "¿En qué áreas trabaja el laboratorio?",
    answer:
      "Nuestras líneas de trabajo incluyen análisis de amenazas (especialmente phishing), respuesta a incidentes y análisis forense, privacidad y protección de datos, desarrollo de herramientas y plataformas, educación y concientización, y colaboración con otras instituciones del país y la región.",
    icon: Compass,
  },
  {
    question: "¿Cómo puedo colaborar o reportar un incidente?",
    answer:
      "Cualquier persona puede reportar intentos de fraude a través de nuestra plataforma pública de reportes. Instituciones académicas, sector público y organizaciones interesadas en colaborar pueden contactarnos directamente a labcibe@una.ac.cr para coordinar proyectos, investigaciones o actividades formativas.",
    icon: Handshake,
  },
  {
    question: "¿Dónde puedo seguir sus publicaciones y alertas?",
    answer:
      "Publicamos alertas, boletines y reportes de tendencias en nuestras redes oficiales (LinkedIn, Facebook e Instagram). Allí compartimos información sobre amenazas activas, recomendaciones de seguridad y novedades del laboratorio.",
    icon: Newspaper,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respondemos las dudas más comunes sobre el laboratorio, sus áreas
            de trabajo y cómo colaborar con nosotros.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;
            const isLast = index === faqs.length - 1;

            return (
              <div key={index}>
                <div className="overflow-hidden bg-gradient-card rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors duration-200"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon
                          className="w-5 h-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className="w-5 h-5 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.25, ease: "easeInOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="pl-14">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Separator with gradient edges */}
                {!isLast && (
                  <div className="relative my-6">
                    <div className="h-1 w-full bg-primary/5 rounded-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

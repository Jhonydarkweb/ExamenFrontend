import { Link } from "react-router-dom";
import { HardHat, ArrowLeft, Mail } from "lucide-react";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import heroImage from "@/assets/hero-cyber.jpg";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main
        id="main-content"
        className="relative flex-1 flex items-center justify-center overflow-hidden mt-20"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-15"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Content */}
        <section className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <HardHat className="w-10 h-10 text-primary-foreground" />
            </div>

            <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-primary-foreground/70 mb-4 animate-in fade-in duration-700">
              LabCIBE-UNA
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Proyecto en construcción
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              La plataforma pública para reportar intentos de fraude está en
              desarrollo. Estamos trabajando para ponerla a disposición de la
              ciudadanía muy pronto.
            </p>

            <p className="text-base text-primary-foreground/75 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in duration-700 delay-300">
              Mientras tanto, si necesita reportar un incidente o desea más
              información, escríbanos al correo del laboratorio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-semibold shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver al inicio
              </Link>
              <a
                href="mailto:labcibe@una.ac.cr"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/60 rounded-full font-semibold transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                labcibe@una.ac.cr
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UnderConstruction;

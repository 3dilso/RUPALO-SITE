import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hvac.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Técnico realizando manutenção em sistema de frio industrial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 pt-20 pb-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 drop-shadow-lg">
            <span className="block">Conforto Térmico Industrial:</span>
            <span className="block text-accent">A Especialidade da RUPALO GERMO LTD</span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto"
          >
            Soluções inovadoras em frio industrial para garantir o ambiente ideal e a máxima eficiência dos seus equipamentos em Luanda.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contacto" variant="hero" size="xl">
              Solicitar Orçamento
            </Button>
            <Button href="/servicos" variant="heroOutline" size="xl">
              Ver Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
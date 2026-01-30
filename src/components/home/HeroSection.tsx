import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 drop-shadow-lg">
            <span className="block">Excelência em Frio Industrial</span>
            <span className="block text-rupalo-vibrant-blue">Manutenção que Você Pode Confiar</span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto"
          >
            Soluções completas em manutenção preventiva, corretiva, diagnóstico de falhas e modernização de equipamentos para o setor industrial em Luanda.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/contacto">Solicitar Orçamento</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/servicos">Ver Nossos Serviços</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
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
        <div className="absolute inset-0 bg-gradient-hero" /> {/* Opacidade ajustada no CSS */}
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
            <span className="block">Frio Industrial:</span>
            <span className="block text-accent">Eficiência e Confiança em Luanda</span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto"
          >
            Manutenção especializada para seus sistemas de refrigeração industrial.
            Garanta o desempenho máximo e a durabilidade dos seus equipamentos.
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

      {/* Removido o div com o gradiente inferior */}
    </section>
  );
};

export default HeroSection;
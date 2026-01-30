import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import teamImage from "@/assets/team-hvac.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={teamImage}
                alt="Equipa RUPALO GERMO LTD"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quem Somos
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              A RUPALO GERMO LTD é especialista em soluções de manutenção de frio industrial em Luanda.
              Com uma equipa de técnicos certificados e anos de experiência, garantimos
              serviços completos de manutenção preventiva, corretiva, diagnóstico de falhas e modernização de equipamentos.
              Nosso foco é a eficiência, durabilidade e a construção de relações de confiança com nossos clientes.
            </p>
            <Button asChild size="lg">
              <Link to="/sobre">Conhecer Nossa História</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
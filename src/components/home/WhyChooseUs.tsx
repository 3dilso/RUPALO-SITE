import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import teamImage from "@/assets/team-hvac.jpg";

const benefits = [
  "Mais de 10 anos de experiência no setor",
  "Técnicos certificados e qualificados",
  "Compromisso com a excelência",
  "Serviços rápidos e de alta qualidade",
  "Foco em eficiência e durabilidade",
  "Relações duradouras com clientes",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
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
                alt="Equipa de técnicos RUPALO GERMO LTD"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por Que Escolher a RUPALO GERMO LTD?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Somos a sua escolha de confiança para todas as necessidades de
              manutenção de frio industrial em Luanda. Nossa experiência e dedicação garantem o
              melhor serviço e a longevidade dos seus equipamentos.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button asChild size="lg">
              <Link to="/sobre">Conhecer Mais</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
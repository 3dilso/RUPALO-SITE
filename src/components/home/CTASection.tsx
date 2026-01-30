import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-cta">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para Melhorar o Seu Conforto?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Peça um orçamento gratuito hoje mesmo e descubra como podemos
            transformar o ambiente da sua casa ou empresa.
          </p>
          <Button asChild size="xl">
            <Link to="/contacto">Contactar Agora</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

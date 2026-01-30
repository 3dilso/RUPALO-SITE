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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4"> {/* Alterado para primary-foreground para melhor contraste no gradiente */}
            Pronto para Otimizar Seus Sistemas de Frio Industrial?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg"> {/* Alterado para primary-foreground/90 para melhor contraste no gradiente */}
            Peça um orçamento gratuito hoje mesmo e descubra como podemos
            garantir a eficiência e durabilidade dos seus equipamentos de refrigeração.
          </p>
          <Button asChild size="xl">
            <Link to="/contacto">Solicitar Orçamento</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
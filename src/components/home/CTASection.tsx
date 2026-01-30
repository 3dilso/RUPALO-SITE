import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-cta">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para Otimizar Seus Sistemas de Frio Industrial?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Peça um orçamento gratuito hoje mesmo e descubra como podemos
            garantir a eficiência e durabilidade dos seus equipamentos de refrigeração.
          </p>
          <Button href="/contacto" size="xl">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
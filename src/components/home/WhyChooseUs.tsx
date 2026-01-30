import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-hvac.jpg";

const benefits = [
  "Equipa técnica certificada e experiente",
  "Compromisso com a excelência e qualidade",
  "Serviços rápidos e eficientes",
  "Foco na durabilidade dos equipamentos",
  "Parceria e confiança com o cliente",
  "Soluções personalizadas para cada necessidade",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
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
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por Que a RUPALO GERMO LTD é a Sua Melhor Escolha?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Escolher a RUPALO GERMO LTD significa optar por um parceiro dedicado à
              excelência em manutenção de frio industrial em Luanda. Nossa abordagem
              foca na qualidade, rapidez e na longevidade dos seus equipamentos.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button href="/sobre" size="lg">
              Conhecer Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import maintenanceImage from "@/assets/maintenance-hvac.jpg";
import repairImage from "@/assets/repair-hvac.jpg";

const featuredServices = [
  {
    image: maintenanceImage,
    title: "Manutenção Preventiva",
    description: "Programas de manutenção para garantir a máxima eficiência e prolongar a vida útil dos seus sistemas de frio industrial.",
    features: [
      "Inspeções regulares",
      "Limpeza e calibração",
      "Relatórios técnicos",
    ],
  },
  {
    image: repairImage,
    title: "Manutenção Corretiva e Reparação",
    description: "Intervenções rápidas e eficazes para restaurar o funcionamento ideal dos seus equipamentos de refrigeração industrial.",
    features: [
      "Diagnóstico preciso",
      "Reparo de componentes",
      "Atendimento emergencial",
    ],
  },
];

const FeaturedServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Principais Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de soluções para manter seus sistemas de frio industrial em perfeito funcionamento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-card overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/servicos">Saber Mais</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/servicos">Ver Todos os Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;
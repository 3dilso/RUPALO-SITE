import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";
import maintenanceImage from "@/assets/maintenance-hvac.jpg";
import repairImage from "@/assets/repair-hvac.jpg";
import acModernImage from "@/assets/ac-modern.jpg";

const services = [
  {
    image: heroImage,
    title: "Manutenção Preventiva",
    description: "Programas de manutenção para garantir a máxima eficiência e prolongar a vida útil dos seus sistemas de frio industrial.",
    features: [
      "Inspeções regulares e detalhadas",
      "Limpeza e calibração de componentes",
      "Verificação de níveis de gás refrigerante",
      "Relatórios técnicos e recomendações",
      "Contratos de manutenção personalizados",
    ],
    cta: "Solicitar Contrato",
    ctaLink: "/contacto",
  },
  {
    image: maintenanceImage,
    title: "Manutenção Corretiva e Reparação",
    description: "Intervenções rápidas e eficazes para restaurar o funcionamento ideal dos seus equipamentos de refrigeração industrial.",
    features: [
      "Diagnóstico preciso de falhas",
      "Reparo de compressores, condensadores, evaporadores",
      "Substituição de peças com garantia",
      "Atendimento emergencial 24/7",
      "Minimização do tempo de inatividade",
    ],
    cta: "Solicitar Reparo",
    ctaLink: "/contacto",
  },
  {
    image: repairImage,
    title: "Diagnóstico de Falhas Técnicas",
    description: "Identificação precisa de problemas para soluções eficazes e duradouras em sistemas de frio industrial.",
    features: [
      "Análise aprofundada de sistemas",
      "Uso de equipamentos de diagnóstico avançados",
      "Relatórios detalhados com causas e soluções",
      "Consultoria técnica especializada",
      "Prevenção de futuras avarias",
    ],
    cta: "Agendar Diagnóstico",
    ctaLink: "/contacto",
  },
  {
    image: acModernImage,
    title: "Atualização e Modernização de Equipamentos",
    description: "Melhore a eficiência e o desempenho dos seus sistemas de frio industrial com as últimas tecnologias.",
    features: [
      "Substituição de componentes obsoletos",
      "Otimização energética",
      "Integração de novas tecnologias",
      "Consultoria para upgrades",
      "Aumento da capacidade e confiabilidade",
    ],
    cta: "Consultar Opções",
    ctaLink: "/contacto",
  },
];

const Servicos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Nossos Serviços
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80"
          >
            Soluções Completas em Manutenção de Frio Industrial
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild size="lg">
                    <Link to={service.ctaLink}>{service.cta}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-muted-foreground mb-6">
              Precisa de assistência imediata ou tem alguma dúvida?
            </p>
            <Button asChild variant="whatsapp" size="lg">
              <a
                href="https://wa.me/244923411375?text=Olá, gostaria de solicitar um orçamento para manutenção de frio industrial."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
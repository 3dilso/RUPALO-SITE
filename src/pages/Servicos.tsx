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
    title: "Instalação Profissional",
    description: "Instalação completa de sistemas de ar condicionado com garantia.",
    features: [
      "Instalação residencial (split, janela, central)",
      "Instalação comercial (escritórios, lojas, restaurantes)",
      "Instalação industrial",
      "Avaliação técnica gratuita",
      "Garantia de instalação",
    ],
    cta: "Pedir Orçamento",
    ctaLink: "/contacto",
  },
  {
    image: maintenanceImage,
    title: "Manutenção Especializada",
    description: "Manutenção preventiva e corretiva para máxima eficiência.",
    features: [
      "Limpeza completa de sistemas",
      "Verificação de gás refrigerante",
      "Inspeção de componentes",
      "Contratos mensais/anuais",
      "Relatórios técnicos",
    ],
    cta: "Solicitar Contrato",
    ctaLink: "/contacto",
  },
  {
    image: repairImage,
    title: "Reparos Rápidos",
    description: "Assistência técnica quando você mais precisa.",
    features: [
      "Diagnóstico técnico preciso",
      "Reparos de todos os tipos de AC",
      "Peças originais",
      "Atendimento emergencial",
      "Garantia nos reparos",
    ],
    cta: "Solicitar Assistência",
    ctaLink: "/contacto",
  },
  {
    image: acModernImage,
    title: "Venda de Equipamentos",
    description: "Equipamentos das melhores marcas com instalação incluída.",
    features: [
      "Marcas reconhecidas internacionalmente",
      "Consultoria para escolha ideal",
      "Instalação incluída",
      "Garantia de fábrica",
      "Financiamento disponível",
    ],
    cta: "Ver Catálogo",
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
            Soluções Completas em Climatização
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
              Não encontrou o que procura? Entre em contacto connosco
            </p>
            <Button asChild variant="whatsapp" size="lg">
              <a
                href="https://wa.me/244923456789"
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

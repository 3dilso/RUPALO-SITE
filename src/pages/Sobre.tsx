import Layout from "@/components/layout/Layout";
import { Star, Shield, Zap, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import teamImage from "@/assets/team-hvac.jpg";

const values = [
  {
    icon: Star,
    title: "Qualidade",
    description: "Comprometidos com excelência em cada serviço",
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Transparência e honestidade com nossos clientes",
  },
  {
    icon: Zap,
    title: "Rapidez",
    description: "Atendimento ágil quando você mais precisa",
  },
];

const certifications = [
  "ISO 9001:2015",
  "Técnicos Certificados",
  "Parceiro Autorizado",
  "Garantia Premium",
];

const Sobre = () => {
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
            Sobre a STADA AC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80"
          >
            Especialistas em Climatização em Luanda
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quem Somos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A STADA AC é especialista em soluções de climatização em Luanda.
                  Oferecemos serviços completos de instalação, manutenção e
                  assistência técnica de ar condicionado para residências e empresas.
                </p>
                <p>
                  Nossa equipa é composta por técnicos certificados com anos de
                  experiência no mercado angolano. Trabalhamos com as melhores
                  marcas internacionais para garantir qualidade e durabilidade.
                </p>
                <p>
                  Desde a nossa fundação, já realizamos milhares de instalações
                  e atendemos centenas de clientes satisfeitos em todo o país.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={teamImage}
                  alt="Equipa STADA AC"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho todos os dias
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-card rounded-xl p-8 shadow-card"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certificações e Qualificações
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compromisso com a excelência reconhecido por certificações
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-secondary rounded-xl"
              >
                <Award className="w-10 h-10 text-primary mb-3" />
                <span className="text-sm font-medium text-foreground text-center">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;

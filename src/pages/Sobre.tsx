import Layout from "@/components/layout/Layout";
import { Star, Shield, Zap, Award, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Compromisso com a excelência em cada serviço prestado",
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Transparência e honestidade em todas as nossas interações",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Serviços rápidos e de alta qualidade quando você mais precisa",
  },
];

const certifications = [
  "Técnicos Certificados",
  "Foco em Eficiência Energética",
  "Parceria com Fornecedores Líderes",
  "Garantia de Serviço Premium",
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Sobre a RUPALO GERMO LTD
          </h1>
          <p
            className="text-xl text-primary-foreground/80"
          >
            Especialistas em Manutenção de Frio Industrial em Luanda
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quem Somos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A RUPALO GERMO LTD é especialista em soluções de manutenção de frio industrial em Luanda.
                  Oferecemos serviços completos de manutenção preventiva, corretiva,
                  diagnóstico de falhas e modernização de equipamentos para o setor industrial.
                </p>
                <p>
                  Nossa equipa é composta por técnicos certificados com anos de
                  experiência no mercado angolano. Trabalhamos com foco em eficiência,
                  durabilidade e a construção de relações duradouras com nossos clientes.
                </p>
                <p>
                  Desde a nossa fundação, temos sido o parceiro de confiança para empresas
                  que buscam excelência e rapidez na manutenção de seus sistemas de refrigeração.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={teamImage}
                  alt="Equipa RUPALO GERMO LTD"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho todos os dias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center bg-card rounded-xl p-8 shadow-card"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Qualificações e Compromisso
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nosso compromisso com a excelência e a satisfação do cliente
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex flex-col items-center justify-center p-6 bg-secondary rounded-xl"
              >
                <CheckCircle className="w-10 h-10 text-primary mb-3" />
                <span className="text-sm font-medium text-foreground text-center">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
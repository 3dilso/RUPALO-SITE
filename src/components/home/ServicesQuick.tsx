import { Wrench, Calendar, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Wrench,
    title: "Instalação Profissional",
    description:
      "Instalação completa de sistemas de ar condicionado residenciais e comerciais",
  },
  {
    icon: Calendar,
    title: "Manutenção Preventiva",
    description:
      "Contratos de manutenção para garantir eficiência e durabilidade",
  },
  {
    icon: Headphones,
    title: "Assistência 24/7",
    description: "Reparos rápidos e assistência técnica quando precisar",
  },
];

const ServicesQuick = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesQuick;

import { Wrench, Calendar, Search } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description:
      "Programas de manutenção para garantir a máxima eficiência e prolongar a vida útil dos seus sistemas de frio industrial.",
  },
  {
    icon: Calendar,
    title: "Manutenção Corretiva",
    description:
      "Intervenções rápidas e eficazes para restaurar o funcionamento ideal dos seus equipamentos de refrigeração.",
  },
  {
    icon: Search,
    title: "Diagnóstico de Falhas",
    description: "Identificação precisa de problemas para soluções eficazes e duradouras em sistemas de frio industrial.",
  },
];

const ServicesQuick = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesQuick;
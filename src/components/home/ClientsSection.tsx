import { Building2, Hotel, Landmark, Store, Factory, GraduationCap } from "lucide-react";

const clients = [
  { name: "Indústrias", icon: Factory },
  { name: "Armazéns Frigoríficos", icon: Building2 },
  { name: "Supermercados", icon: Store },
  { name: "Hotéis", icon: Hotel },
  { name: "Restaurantes", icon: Landmark },
  { name: "Centros Logísticos", icon: GraduationCap },
];

const ClientsSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parceiros que Confiam em Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendemos diversos segmentos industriais e comerciais com soluções personalizadas de manutenção de frio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all"
            >
              <client.icon className="w-10 h-10 text-primary mb-3" />
              <span className="text-sm font-medium text-muted-foreground text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
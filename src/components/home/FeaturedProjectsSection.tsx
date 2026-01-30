import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import acModernImage from "@/assets/ac-modern.jpg";
import heroImage from "@/assets/hero-hvac.jpg";

const featuredProjects = [
  {
    id: 1,
    image: acModernImage,
    category: "Armazéns Frigoríficos",
    title: "Câmara Frigorífica - Viana",
    description: "Manutenção preventiva e otimização de sistema de refrigeração de grande porte.",
  },
  {
    id: 2,
    image: heroImage,
    category: "Fábricas",
    title: "Linha de Produção - Zona Industrial",
    description: "Instalação e calibração de sistema de frio para processo industrial.",
  },
];

const FeaturedProjectsSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Projetos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos que demonstram nossa expertise em frio industrial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl shadow-card overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/galeria">Ver Todos os Projetos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
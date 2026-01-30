import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";
import maintenanceImage from "@/assets/maintenance-hvac.jpg";
import repairImage from "@/assets/repair-hvac.jpg";
import acModernImage from "@/assets/ac-modern.jpg";
import teamImage from "@/assets/team-hvac.jpg";

const categories = ["Todos", "Residencial", "Comercial", "Industrial"];

const projects = [
  {
    id: 1,
    image: acModernImage,
    category: "Residencial",
    title: "Apartamento T3 - Talatona",
    description: "Instalação de 3 splits inverter Samsung",
    date: "Janeiro 2025",
    equipment: "Samsung Wind-Free 12000 BTU",
  },
  {
    id: 2,
    image: heroImage,
    category: "Comercial",
    title: "Escritório Empresarial - Baixa",
    description: "Sistema VRF completo para 500m²",
    date: "Dezembro 2024",
    equipment: "Daikin VRV IV",
  },
  {
    id: 3,
    image: maintenanceImage,
    category: "Residencial",
    title: "Vivenda T5 - Miramar",
    description: "Instalação de 6 splits e sistema central",
    date: "Novembro 2024",
    equipment: "LG Dual Inverter",
  },
  {
    id: 4,
    image: repairImage,
    category: "Industrial",
    title: "Fábrica - Viana",
    description: "Sistema de climatização industrial",
    date: "Outubro 2024",
    equipment: "Carrier Industrial",
  },
  {
    id: 5,
    image: teamImage,
    category: "Comercial",
    title: "Hotel - Ilha de Luanda",
    description: "Climatização de 50 quartos",
    date: "Setembro 2024",
    equipment: "Midea Inverter",
  },
  {
    id: 6,
    image: acModernImage,
    category: "Residencial",
    title: "Condomínio - Kilamba",
    description: "Instalação em 12 apartamentos",
    date: "Agosto 2024",
    equipment: "Gree Inverter",
  },
  {
    id: 7,
    image: heroImage,
    category: "Comercial",
    title: "Restaurante - Largo da Maianga",
    description: "Sistema cassete 4 vias",
    date: "Julho 2024",
    equipment: "Fujitsu Cassete",
  },
  {
    id: 8,
    image: maintenanceImage,
    category: "Industrial",
    title: "Armazém - Cacuaco",
    description: "Refrigeração industrial",
    date: "Junho 2024",
    equipment: "Trane Chiller",
  },
  {
    id: 9,
    image: repairImage,
    category: "Residencial",
    title: "Apartamento T2 - Ingombota",
    description: "Instalação de 2 splits",
    date: "Maio 2024",
    equipment: "Haier Inverter",
  },
];

const Galeria = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
            Nossos Trabalhos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80"
          >
            Veja alguns dos projetos que realizamos
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                      <h3 className="text-lg font-bold text-primary-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-2xl max-w-2xl w-full overflow-hidden shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  {selectedProject.category}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {selectedProject.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-sm text-muted-foreground">Data</span>
                    <p className="font-medium text-foreground">{selectedProject.date}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Equipamento</span>
                    <p className="font-medium text-foreground">{selectedProject.equipment}</p>
                  </div>
                </div>
                <Button onClick={() => setSelectedProject(null)} className="w-full">
                  Fechar
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-gradient-cta">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Quer um resultado como este?
            </h2>
            <Button asChild size="lg">
              <Link to="/contacto">Pedir Orçamento</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Galeria;

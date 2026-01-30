import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const serviceTypes = [
  "Manutenção Preventiva",
  "Manutenção Corretiva e Reparação",
  "Diagnóstico de Falhas Técnicas",
  "Atualização e Modernização de Equipamentos",
  "Outro",
];

const Contacto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Mensagem enviada com sucesso!");
  };

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
            Entre em Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80"
          >
            Estamos prontos para atender suas necessidades de frio industrial
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Envie sua Mensagem
                </h2>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-whatsapp" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Obrigado!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Entraremos em contacto em breve.
                    </p>
                    <Button onClick={() => setIsSuccess(false)}>
                      Enviar Nova Mensagem
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                      <Input
                        id="phone"
                        placeholder="+244 XXX XXX XXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Tipo de Serviço</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Descreva o que precisa para seus sistemas de frio industrial..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Pedido"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/244923411375?text=Olá, gostaria de solicitar um orçamento para manutenção de frio industrial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-whatsapp/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-whatsapp" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">+244 923 411 375</p>
                    <p className="text-muted-foreground">+244 957 544 730</p>
                  </div>
                </a>

                <a
                  href="tel:+244923411375"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">+244 923 411 375</p>
                    <p className="text-muted-foreground">+244 957 544 730</p>
                  </div>
                </a>

                <a
                  href="mailto:info@rupalogermo.com"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@rupalogermo.com</p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Luanda,Bairro Cassenda,Angola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Localização</h3>
                    <p className="text-muted-foreground">Luanda – Bairro Cassenda, Angola</p>
                  </div>
                </a>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-card h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126135.85694758695!2d13.174165!3d-8.8368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a92!2sLuanda%2C%20Angola!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização RUPALO GERMO LTD"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Horário de Atendimento
                  </h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta</span>
                    <span className="font-medium text-foreground">8h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="font-medium text-foreground">8h - 13h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="font-medium text-destructive">Fechado</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t mt-2">
                    <span>Atendimento de Emergência</span>
                    <span className="font-medium text-whatsapp">24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
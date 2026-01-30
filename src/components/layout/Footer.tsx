import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo-oficial.png" alt="RUPALO GERMO LTD Logo" className="h-10 w-auto object-contain" />
              <span className="text-xl font-bold">RUPALO GERMO LTD</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Especialistas em manutenção de frio industrial em Luanda. Soluções completas para eficiência e durabilidade dos seus sistemas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/rupalogermo" // Placeholder, ajustar se houver link real
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/rupalogermo" // Placeholder, ajustar se houver link real
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/244923411375?text=Olá, gostaria de solicitar um orçamento para manutenção de frio industrial."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-whatsapp transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Sobre Nós", path: "/sobre" },
                { name: "Serviços", path: "/servicos" },
                { name: "Projetos", path: "/galeria" },
                { name: "Contacto", path: "/contacto" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Manutenção Preventiva",
                "Manutenção Corretiva",
                "Diagnóstico de Falhas",
                "Atualização de Equipamentos",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/servicos"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <a href="tel:+244923411375" className="text-primary-foreground/70 hover:text-primary-foreground">
                    +244 923 411 375
                  </a>
                  <br />
                  <a href="tel:+244957544730" className="text-primary-foreground/70 hover:text-primary-foreground">
                    +244 957 544 730
                  </a>
                </div>
              </li>
          
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:info@rupalogermo.com" className="text-primary-foreground/70 hover:text-primary-foreground">
                  info@rupalogermo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-primary-foreground/70">
                  Luanda – Bairro Cassenda, Angola
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 RUPALO GERMO LTD. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Desenvolvido por Edilson Paulo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
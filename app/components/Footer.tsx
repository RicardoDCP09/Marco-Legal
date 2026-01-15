export default function Footer() {
  return (
    <footer className="bg-black border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-blue bg-clip-text text-transparent">
              CodeRAM
            </h3>
            <p className="text-muted-foreground mb-4">
              Transformando ideas en soluciones digitales innovadoras para
              impulsar tu negocio.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Apps Móviles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Sistemas de Gestión
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Automatización
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">✉</span>
                coderam@outlook.es
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">☎</span>
                +58 412-299-6916
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📍</span>
                Táchira, Venezuela
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 CodeRAM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

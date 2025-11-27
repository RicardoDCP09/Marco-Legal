export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CodeRAM</h3>
            <p className="text-gray-400 mb-4">
              Transformando ideas en soluciones digitales innovadoras para
              impulsar tu negocio.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Apps Móviles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sistemas de Gestión
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Automatización
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>coderam@outlook.es</li>
              <li>+58 412-299-6916</li>
              <li>Táchira, Venezuela</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CodeRAM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

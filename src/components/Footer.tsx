export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: info@concesionario.com</li>
              <li>Dirección: Av. Principal 123</li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li>Lunes a Viernes: 9:00 - 19:00</li>
              <li>Sábados: 9:00 - 14:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Concesionario. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
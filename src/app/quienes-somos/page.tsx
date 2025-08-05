export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-primary text-center mb-8">
          ¿Quiénes Somos?
        </h1>

        {/* Grid principal con dos columnas simétricas */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Introducción */}
          <div className="bg-white rounded-xl shadow-xl p-8 mt-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              En Car Point, no solo vendemos autos, te conectamos con historias. Entendemos que la compra de un vehículo es mucho más que una simple transacción; es un proyecto, un sueño y un paso importante en tu vida. Por eso, nos hemos propuesto ser el aliado que necesitás para dar ese paso con total seguridad y confianza.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Desde nuestro moderno showroom en el corazón de Yerba Buena, Tucumán, nos dedicamos a transformar la experiencia de comprar un auto. Con años de trayectoria en el sector automotor, hemos construido una reputación basada en la honestidad, la transparencia y, lo más importante, la satisfacción de cientos de clientes que hoy recorren las calles con un vehículo de Car Point.
            </p>
          </div>

          {/* Experiencia Car Point - Sin fondo blanco */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Viví la Experiencia Car Point
            </h2>
            <div className="space-y-3">
              <div className="bg-primary bg-opacity-95 rounded-lg p-5 shadow-lg border-l-4 border-accent border-opacity-70 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-white mb-2">Showroom de Vanguardia</h3>
                <p className="text-gray-100 text-sm">
                  Descubrí tu próximo auto en un espacio luminoso y moderno, diseñado para que puedas apreciar cada detalle sin apuros.
                </p>
              </div>
              <div className="bg-primary bg-opacity-95 rounded-lg p-5 shadow-lg border-l-4 border-accent border-opacity-70 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-white mb-2">Asesoramiento Cercano</h3>
                <p className="text-gray-100 text-sm">
                  Disfrutá de nuestros cómodos espacios de atención, donde podemos conversar y encontrar juntos la mejor opción de financiación y cobertura para vos.
                </p>
              </div>
              <div className="bg-primary bg-opacity-95 rounded-lg p-5 shadow-lg border-l-4 border-accent border-opacity-70 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-white mb-2">Comodidad Premium</h3>
                <p className="text-gray-100 text-sm">
                  Relajate en nuestra sala de espera con Wi-Fi y servicio de cafetería. Tu tiempo es valioso y queremos que tu visita sea un placer.
                </p>
              </div>
              <div className="bg-primary bg-opacity-95 rounded-lg p-5 shadow-lg border-l-4 border-accent border-opacity-70 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-white mb-2">Acceso Fácil y Seguro</h3>
                <p className="text-gray-100 text-sm">
                  Contamos con estacionamiento exclusivo para clientes, facilitando tu llegada y garantizando una experiencia perfecta desde el primer momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
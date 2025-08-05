import Hero from '@/components/Hero'
import FeaturedCars from '@/components/FeaturedCars'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCars />
      <div className="bg-white py-16 text-center">
        <a
          href="/catalogo"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-accent hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
        >
          Ver Catálogo Completo
        </a>
      </div>
    </main>
  )
} 
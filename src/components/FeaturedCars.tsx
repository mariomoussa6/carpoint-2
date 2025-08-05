'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useImageFallback } from '@/hooks/useImageFallback'

// Datos de ejemplo - luego podrías moverlos a un archivo separado o base de datos
const featuredCars = [
  {
    id: 1,
    name: 'Citroën C3 Live 2016',
    price: '14.200.000',
    image: '/images/cars/c3-2016/1.jpg'
  },
  {
    id: 2,
    name: 'Volkswagen Amarok V6 Highline 2023',
    price: '25.800.000',
    image: '/images/cars/amarok-v6-2023/1.jpg'
  },
  {
    id: 3,
    name: 'Toyota Etios XLS 2020',
    price: '16.900.000',
    image: '/images/cars/etios-2020/1.png'
  },
  {
    id: 4,
    name: 'Volkswagen Amarok Trendline 2018',
    price: '27.500.000',
    image: '/images/cars/amarok-2018/1.jpg'
  },
  {
    id: 5,
    name: 'Nissan Kicks Advance 2017',
    price: '16.700.000',
    image: '/images/cars/kicks-2017/1.jpg'
  }
]

// Componente para manejar cada imagen con fallback
function FeaturedCarImage({ car }: { car: typeof featuredCars[0] }) {
  const { src: imageSrc, onError } = useImageFallback(car.image)
  
  return (
    <Image
      src={imageSrc}
      alt={car.name}
      fill
      className="object-cover rounded-t-lg"
      sizes="(max-width: 768px) 100vw, 33vw"
      onError={onError}
    />
  )
}

export default function FeaturedCars() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Verificar inicialmente
    checkMobile()

    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkMobile)

    // Limpiar listener
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = isMobile ? featuredCars.length - 1 : featuredCars.length - 3;
        return prevIndex === maxIndex ? 0 : prevIndex + 1;
      });
    }, 8000); // Cambia cada 8 segundos

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-8 drop-shadow-md">
          Vehículos Destacados
        </h2>
        
        <div className="relative overflow-hidden py-2">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` }}
          >
            {featuredCars.map((car) => (
              <div 
                key={car.id}
                className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-4"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn">
                  <div className="relative h-48 md:h-64">
                    <FeaturedCarImage car={car} />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-primary">{car.name}</h3>
                    <p className="text-gray-900 font-bold mt-2">$ {car.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {(isMobile ? featuredCars : featuredCars.slice(0, featuredCars.length - 2)).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-accent' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
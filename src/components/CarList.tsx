'use client'

import { useState, useEffect } from 'react'
import CarCard from './CarCard'
import Filters from './Filters'
import CarModal from './CarModal'

// Definir el tipo Car para consistencia
interface Car {
  id: number
  brand: string
  model: string
  year: number
  mileage: number
  version: string
  transmission: string
  price: number
  location: string
  image: string
  whatsapp: string
  images: string[]
  isNew?: boolean
  isOutlet?: boolean
  discountPercentage?: number
}

const cars: Car[] = [
  {
    id: 1,
    brand: 'Peugeot',
    model: '208',
    year: 2025,
    mileage: 45000,
    version: 'Allure',
    transmission: 'Manual',
    price: 15900000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/peugeot-208-2025/1.jpg',
    images: [
      '/images/cars/peugeot-208-2025/1.jpg',  // Frontal
      '/images/cars/peugeot-208-2025/2.jpg',  // Trasera
      '/images/cars/peugeot-208-2025/3.jpg',  // Lateral
      '/images/cars/peugeot-208-2025/4.jpg',  // Lateral trasero
      '/images/cars/peugeot-208-2025/5.jpg',  // Lateral delantero
      '/images/cars/peugeot-208-2025/6.jpg',  // Interior completo
      '/images/cars/peugeot-208-2025/7.jpg'   // Volante
    ]
  },
  {
    id: 2,
    brand: 'Volkswagen',
    model: 'Amarok',
    year: 2017,
    mileage: 38000,
    version: 'V6 Highline Extreme',
    transmission: 'Automático',
    price: 17500000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/amarok-2017/1.jpg',
    images: [
      '/images/cars/amarok-2017/1.jpg',
      '/images/cars/amarok-2017/2.jpg',
      '/images/cars/amarok-2017/3.jpg',
      '/images/cars/amarok-2017/4.jpg',
      '/images/cars/amarok-2017/5.jpg'
    ]
  },
  {
    id: 3,
    brand: 'Volkswagen',
    model: 'Nivus',
    year: 2021,
    mileage: 62000,
    version: 'Comfortline',
    transmission: 'Manual',
    price: 14800000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/nivus-2021/1.png',
    images: [
      '/images/cars/nivus-2021/1.png',
      '/images/cars/nivus-2021/2.jpg',
      '/images/cars/nivus-2021/3.jpg',
      '/images/cars/nivus-2021/4.jpg',
      '/images/cars/nivus-2021/5.jpg'
    ]
  },
  {
    id: 4,
    brand: 'Renault',
    model: 'Kwid',
    year: 2021,
    mileage: 25000,
    version: 'Intense',
    transmission: 'Manual',
    price: 18900000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/kwid-2021/1.jpg',
    images: [
      '/images/cars/kwid-2021/1.jpg',
      '/images/cars/kwid-2021/2.jpg',
      '/images/cars/kwid-2021/3.jpg',
      '/images/cars/kwid-2021/4.jpg',
      '/images/cars/kwid-2021/5.jpg',
      '/images/cars/kwid-2021/6.jpg'
    ]
  },
  {
    id: 5,
    brand: 'Nissan',
    model: 'Kicks',
    year: 2017,
    mileage: 42000,
    version: 'Advance',
    transmission: 'Automático',
    price: 16700000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/kicks-2017/1.jpg',
    images: [
      '/images/cars/kicks-2017/1.jpg',
      '/images/cars/kicks-2017/2.jpg',
      '/images/cars/kicks-2017/3.jpg',
      '/images/cars/kicks-2017/4.jpg',
      '/images/cars/kicks-2017/5.jpg',
      '/images/cars/kicks-2017/6.jpg'
    ]
  },
  {
    id: 6,
    brand: 'Honda',
    model: 'HR-V',
    year: 2016,
    mileage: 31000,
    version: 'EXL',
    transmission: 'Automático',
    price: 15500000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/hrv-2016/1.jpg',
    images: [
      '/images/cars/hrv-2016/1.jpg',
      '/images/cars/hrv-2016/2.jpg',
      '/images/cars/hrv-2016/3.jpg',
      '/images/cars/hrv-2016/4.jpg',
      '/images/cars/hrv-2016/5.jpg',
      '/images/cars/hrv-2016/6.jpg'
    ]
  },
  {
    id: 7,
    brand: 'Toyota',
    model: 'Etios',
    year: 2020,
    mileage: 18000,
    version: 'XLS',
    transmission: 'Automático',
    price: 16900000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/etios-2020/1.png',
    images: [
      '/images/cars/etios-2020/1.png',
      '/images/cars/etios-2020/2.jpg',
      '/images/cars/etios-2020/3.jpg',
      '/images/cars/etios-2020/4.jpg',
      '/images/cars/etios-2020/5.jpg'
    ]
  },
  {
    id: 8,
    brand: 'Citroën',
    model: 'C3',
    year: 2016,
    mileage: 28000,
    version: 'Live',
    transmission: 'Manual',
    price: 14200000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/c3-2016/1.jpg',
    images: [
      '/images/cars/c3-2016/1.jpg',
      '/images/cars/c3-2016/2.jpg',
      '/images/cars/c3-2016/3.jpg',
      '/images/cars/c3-2016/4.jpg',
      '/images/cars/c3-2016/5.jpg',
      '/images/cars/c3-2016/6.jpg'
    ]
  },
  {
    id: 9,
    brand: 'Volkswagen',
    model: 'Amarok V6',
    year: 2023,
    mileage: 52000,
    version: 'Highline',
    transmission: 'Automático',
    price: 25800000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/amarok-v6-2023/1.jpg',
    images: [
      '/images/cars/amarok-v6-2023/1.jpg',
      '/images/cars/amarok-v6-2023/2.jpg',
      '/images/cars/amarok-v6-2023/3.jpg',
      '/images/cars/amarok-v6-2023/4.jpg',
      '/images/cars/amarok-v6-2023/5.jpg'
    ]
  },
  {
    id: 10,
    brand: 'Volkswagen',
    model: 'Amarok',
    year: 2018,
    mileage: 45000,
    version: 'Trendline',
    transmission: 'Automático',
    price: 27500000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/amarok-2018/1.jpg',
    images: [
      '/images/cars/amarok-2018/1.jpg',
      '/images/cars/amarok-2018/2.jpg',
      '/images/cars/amarok-2018/3.jpg',
      '/images/cars/amarok-2018/4.jpg',
      '/images/cars/amarok-2018/5.jpg',
      '/images/cars/amarok-2018/6.jpg'
    ]
  },
  {
    id: 11,
    brand: 'Peugeot',
    model: '408',
    year: 2014,
    mileage: 35000,
    version: 'Allure',
    transmission: 'Manual',
    price: 28900000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/peugeot-408-2014/1.jpg',
    images: [
      '/images/cars/peugeot-408-2014/1.jpg',
      '/images/cars/peugeot-408-2014/2.jpg',
      '/images/cars/peugeot-408-2014/3.jpg',
      '/images/cars/peugeot-408-2014/4.jpg',
      '/images/cars/peugeot-408-2014/5.jpg',
      '/images/cars/peugeot-408-2014/6.jpg'
    ]
  },
  {
    id: 12,
    brand: 'Volkswagen',
    model: 'Amarok',
    year: 2017,
    mileage: 42000,
    version: 'Comfortline',
    transmission: 'Manual',
    price: 19800000,
    location: 'San Miguel de Tucumán',
    whatsapp: '+54 9 381 123-4567',
    image: '/images/cars/amarok-comfortline-2017/1.jpg',
    images: [
      '/images/cars/amarok-comfortline-2017/1.jpg',
      '/images/cars/amarok-comfortline-2017/2.jpg',
      '/images/cars/amarok-comfortline-2017/3.jpg',
      '/images/cars/amarok-comfortline-2017/4.jpg',
      '/images/cars/amarok-comfortline-2017/5.jpg',
      '/images/cars/amarok-comfortline-2017/6.jpg'
    ]
  }
]

export default function CarList() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [displayedCars, setDisplayedCars] = useState(cars)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [filters, setFilters] = useState({
    brands: [] as string[],
    minYear: undefined as number | undefined,
    maxYear: undefined as number | undefined,
    minPrice: undefined as number | undefined,
    maxPrice: undefined as number | undefined,
    minKm: undefined as number | undefined,
    maxKm: undefined as number | undefined,
  })



  // Effect para manejar el delay y la transición cuando cambian los filtros
  useEffect(() => {
    // No hacer nada en la primera carga
    if (isFirstLoad) {
      setIsFirstLoad(false)
      return
    }
    
    setIsLoading(true)
    
    const timer = setTimeout(() => {
      const filtered = cars.filter((car) => {
        // Filtro de marcas múltiples
        if (filters.brands.length > 0 && !filters.brands.includes(car.brand)) return false
        
        // Filtro de rango de años
        if (filters.minYear && car.year < filters.minYear) return false
        if (filters.maxYear && car.year > filters.maxYear) return false
        
        // Filtros de precio
        if (filters.minPrice && car.price < filters.minPrice) return false
        if (filters.maxPrice && car.price > filters.maxPrice) return false
        
        // Filtros de kilometraje
        if (filters.minKm && car.mileage < filters.minKm) return false
        if (filters.maxKm && car.mileage > filters.maxKm) return false
        
        return true
      })
      
      setDisplayedCars(filtered)
      setIsLoading(false)
    }, 500) // 0.5 segundos de delay
    
    return () => clearTimeout(timer)
  }, [filters])

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }

  return (
    <section id="vehiculos" className="py-12 bg-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full flex items-center justify-center lg:justify-start lg:w-[320px] lg:flex-shrink-0 self-start">
            <div className="w-[320px]">
              <Filters onFilterChange={handleFilterChange} />
            </div>
          </aside>
          <div className="flex-1 min-w-0">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mb-4"></div>
                <p className="text-primary font-medium">Aplicando filtros...</p>
              </div>
            ) : (
              <>
                <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                  {displayedCars.map((car) => (
                    <CarCard 
                      key={car.id} 
                      car={car} 
                      onClick={() => {
                        setSelectedCar(car)
                        setIsModalOpen(true)
                      }}
                    />
                  ))}
                </div>
                {displayedCars.length === 0 && (
                  <p className="text-center text-gray-500 mt-8 transition-opacity duration-500">
                    No se encontraron vehículos con los filtros seleccionados
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal de detalles del auto */}
      <CarModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedCar(null)
        }}
      />
    </section>
  )
} 
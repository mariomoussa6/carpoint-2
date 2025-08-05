'use client'

import Image from 'next/image'

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
<<<<<<< HEAD
=======
  images?: string[]
>>>>>>> master
  isNew?: boolean
  isOutlet?: boolean
  discountPercentage?: number
}

interface CarCardProps {
  car: Car
}

export default function CarCard({ car, onClick }: CarCardProps & { onClick: () => void }) {

  return (
    <div 
      onClick={onClick} 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer animate-fadeIn">
      <div className="relative">
        {/* Car Image */}
        <div className="relative h-48 md:h-56 w-full">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Car Title */}
        <div className="mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            {car.brand} • {car.model}
          </h3>
        </div>

        {/* Car Details */}
        <p className="text-xs sm:text-sm text-gray-600 mb-3">
          {car.year} • {car.mileage.toLocaleString()} km • {car.version} • {car.transmission}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg sm:text-xl font-bold text-gray-900">$ {car.price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
} 
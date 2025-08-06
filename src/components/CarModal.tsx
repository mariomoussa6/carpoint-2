'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useImageFallback } from '@/hooks/useImageFallback';

type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  version: string;
  transmission: string;
  price: number;
  location: string;
  image: string;
  whatsapp: string;
  images?: string[];
};

type CarModalProps = {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function CarModal({ car, isOpen, onClose }: CarModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullscreenGallery, setShowFullscreenGallery] = useState(false);

  // Llamar todos los hooks ANTES de cualquier return condicional
  const currentImage = car?.images?.[currentImageIndex] || car?.image || '';
  const { src: imageSrc, onError } = useImageFallback(currentImage);

  // DESPUÉS de todos los hooks, hacer las verificaciones condicionales
  if (!car || !isOpen) return null;

  const nextImage = () => {
    if (car.images) {
      setCurrentImageIndex((prev) => (prev + 1) % car.images!.length);
    }
  };

  const previousImage = () => {
    if (car.images) {
      setCurrentImageIndex((prev) => (prev - 1 + car.images!.length) % car.images!.length);
    }
  };

  return (
    <>
      {/* Modal container with backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal content */}
        <div 
          className="relative w-full max-w-sm md:max-w-6xl bg-white rounded-lg shadow-xl p-3 md:p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col md:flex-row gap-3 md:gap-6">
            {/* Image section */}
            <div className="w-full md:w-3/5">
              <div className="relative">
                <div
                  className="relative h-48 md:h-[500px] w-full rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setShowFullscreenGallery(true)}
                >
                  <Image
                    src={imageSrc}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                    onError={onError}
                  />
                  
                  {/* Flechas del carrusel - solo mostrar si hay múltiples imágenes */}
                  {car.images && car.images.length > 1 && (
                    <>
                      {/* Flecha izquierda */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          previousImage();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all duration-200 opacity-80 hover:opacity-100"
                      >
                        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {/* Flecha derecha */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all duration-200 opacity-80 hover:opacity-100"
                      >
                        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Indicador de imagen actual */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        {currentImageIndex + 1} / {car.images.length}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Details section */}
            <div className="w-full md:w-2/5">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {car.brand} {car.model}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Detalles</h3>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Año</p>
                      <p className="text-base font-medium">{car.year}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Kilometraje</p>
                      <p className="text-base font-medium">{car.mileage.toLocaleString()} km</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Versión</p>
                      <p className="text-base font-medium">{car.version}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Transmisión</p>
                      <p className="text-base font-medium">{car.transmission}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Precio</h3>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    $ {car.price.toLocaleString()}
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href={`https://wa.me/+56912345678?text=Hola, me interesa el ${car.brand} ${car.model} del año ${car.year}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center px-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Cerrar</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Fullscreen gallery */}
      {showFullscreenGallery && car.images && (
        <div 
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center"
          onClick={() => setShowFullscreenGallery(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowFullscreenGallery(false);
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-[70]"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            <div 
              className="relative w-full max-w-5xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}>
              <Image
                src={imageSrc}
                alt={`${car.brand} ${car.model}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                onError={onError}
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[70]"
            >
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[70]"
            >
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4"
              onClick={(e) => e.stopPropagation()}>
              {car.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 relative rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index ? 'border-white' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${car.brand} ${car.model} - Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
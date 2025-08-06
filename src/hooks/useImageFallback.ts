'use client'

import { useState, useEffect } from 'react'

export function useImageFallback(src: string, fallbackSrc?: string) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Reset cuando cambia la fuente original
  useEffect(() => {
    setImgSrc(src)
    setHasError(false)
    setIsLoading(true)
  }, [src])

  const handleError = () => {
    console.warn(`Imagen falló al cargar: ${imgSrc}`)
    if (!hasError) {
      setHasError(true)
      setIsLoading(false)
      if (fallbackSrc) {
        setImgSrc(fallbackSrc)
      } else {
        // Usar imagen placeholder por defecto que existe en public/
        setImgSrc('/placeholder-car.jpg')
      }
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const resetImage = () => {
    setImgSrc(src)
    setHasError(false)
    setIsLoading(true)
  }

  return {
    src: imgSrc,
    onError: handleError,
    onLoad: handleLoad,
    hasError,
    isLoading,
    resetImage
  }
}
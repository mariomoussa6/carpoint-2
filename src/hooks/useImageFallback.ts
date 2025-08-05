'use client'

import { useState } from 'react'

export function useImageFallback(src: string, fallbackSrc?: string) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      if (fallbackSrc) {
        setImgSrc(fallbackSrc)
      } else {
        // Usar imagen placeholder por defecto que existe en public/
        setImgSrc('/placeholder-car.jpg')
      }
    }
  }

  const resetImage = () => {
    setImgSrc(src)
    setHasError(false)
  }

  return {
    src: imgSrc,
    onError: handleError,
    hasError,
    resetImage
  }
}
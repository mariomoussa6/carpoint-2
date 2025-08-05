'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useImageFallback } from '@/hooks/useImageFallback'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { src: logoSrc, onError } = useImageFallback('/images/car-point-logo.png')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className="bg-primary text-white relative h-24 md:h-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo section */}
          <div className="flex-shrink-0">
            <Link href="/" className="block hover:opacity-80 transition-opacity">
              <Image
                src={logoSrc}
                alt="Car Point Logo"
                width={600}
                height={150}
                priority
                className="h-[110px] md:h-[150px] w-auto object-contain brightness-110"
                onError={onError}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link 
                href="/" 
                className="relative px-4 py-2 text-base font-medium group hover:text-accent transition-colors"
              >
                <span className="relative z-10">Inicio</span>
                <div className="absolute inset-x-0 h-[1px] bottom-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
              <Link 
                href="/catalogo" 
                className="relative px-4 py-2 text-base font-medium group hover:text-accent transition-colors"
              >
                <span className="relative z-10">Vehículos</span>
                <div className="absolute inset-x-0 h-[1px] bottom-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
              <Link 
                href="/quienes-somos" 
                className="relative px-4 py-2 text-base font-medium group hover:text-accent transition-colors"
              >
                <span className="relative z-10">¿Quiénes somos?</span>
                <div className="absolute inset-x-0 h-[1px] bottom-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
              <Link 
                              href="/contacto"
              className="relative px-4 py-2 text-base font-medium group hover:text-accent transition-colors"
              >
                <span className="relative z-10">Contacto</span>
                <div className="absolute inset-x-0 h-[1px] bottom-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent focus:outline-none"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-primary shadow-lg z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 rounded-md text-base font-medium text-white hover:text-accent hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="block px-4 py-3 rounded-md text-base font-medium text-white hover:text-accent hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={toggleMenu}
            >
              Vehículos
            </Link>
            <Link
              href="/quienes-somos"
              className="block px-4 py-3 rounded-md text-base font-medium text-white hover:text-accent hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={toggleMenu}
            >
              ¿Quiénes somos?
            </Link>
            <Link
              href="/contacto"
              className="block px-4 py-3 rounded-md text-base font-medium text-white hover:text-accent hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative border with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"></div>
    </nav>
  )
} 
'use client'

import { useState } from 'react'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'

interface FiltersProps {
  onFilterChange: (filters: {
    brands?: string[]
    minYear?: number
    maxYear?: number
    minPrice?: number
    maxPrice?: number
    minKm?: number
    maxKm?: number
  }) => void
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000000])
  const [kmRange, setKmRange] = useState<[number, number]>([0, 300000])
  const currentYear = new Date().getFullYear()
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2025])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [tempFilters, setTempFilters] = useState({
    brands: [] as string[],
    minYear: undefined as number | undefined,
    maxYear: undefined as number | undefined,
    minPrice: undefined as number | undefined,
    maxPrice: undefined as number | undefined,
    minKm: undefined as number | undefined,
    maxKm: undefined as number | undefined,
  })

  const handleTempFilterChange = (filters: Partial<typeof tempFilters>) => {
    const newFilters = { ...tempFilters, ...filters }
    setTempFilters(newFilters)
    onFilterChange(newFilters) // Aplicar filtros automáticamente
  }

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    const [min, max] = newValue as number[]
    setPriceRange([min, max])
    handleTempFilterChange({
      minPrice: min,
      maxPrice: max
    })
  }

  const handleResetFilters = () => {
    setPriceRange([0, 100000000])
    setKmRange([0, 300000])
    setYearRange([2010, 2025])
    setSelectedBrands([])
    const resetFilters = {
      brands: [],
      minYear: undefined,
      maxYear: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      minKm: undefined,
      maxKm: undefined,
    }
    setTempFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 w-[320px] flex flex-col">
      <h2 className="text-lg font-semibold mb-3">Filtros</h2>

      {/* Precio */}
      <div className="mb-3 border-b pb-2">
        <button
          className="flex justify-between items-center w-full text-left font-medium text-gray-800"
          onClick={() => toggleSection('precio')}
        >
          Precio
          <svg
            className={`w-5 h-5 transition-transform ${
              expandedSection === 'precio' ? 'transform rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSection === 'precio' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-4 px-2">
            <div className="flex justify-between mb-4">
              <div className="flex-1 mr-2">
                <label className="text-xs text-gray-600 mb-0.5 block">Desde</label>
                <input
                  type="text"
                  value={`$ ${priceRange[0].toLocaleString()}`}
                  className="w-full p-2 border rounded text-sm"
                  readOnly
                />
              </div>
              <div className="flex-1 ml-2">
                <label className="text-xs text-gray-600 mb-0.5 block">Hasta</label>
                <input
                  type="text"
                  value={`$ ${priceRange[1].toLocaleString()}`}
                  className="w-full p-2 border rounded text-sm"
                  readOnly
                />
              </div>
            </div>
            
            <Box sx={{ px: 1 }}>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                min={0}
                max={100000000}
                step={100000}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `$${value.toLocaleString()}`}
                sx={{
                  color: '#2563eb',
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: '0 0 0 8px rgba(37, 99, 235, 0.16)',
                    },
                  },
                  '& .MuiSlider-track': {
                    height: 4,
                  },
                  '& .MuiSlider-rail': {
                    height: 4,
                    opacity: 0.2,
                  },
                }}
              />
            </Box>
          </div>
        </div>
      </div>

      {/* Marca */}
      <div className="mb-4 border-b pb-2">
        <button
          className="flex justify-between items-center w-full text-left font-medium text-gray-800"
          onClick={() => toggleSection('marca')}
        >
          Marca
          <svg
            className={`w-5 h-5 transition-transform ${
              expandedSection === 'marca' ? 'transform rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSection === 'marca' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-2 space-y-2 max-h-48 overflow-y-auto px-2">
            {[
              "Toyota",
              "Honda",
              "Volkswagen",
              "Ford",
              "Chevrolet",
              "Mercedes-Benz",
              "BMW",
              "Audi",
              "Nissan",
              "Hyundai"
            ].map((brand) => (
              <div key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onChange={(e) => {
                    const newSelectedBrands = e.target.checked
                      ? [...selectedBrands, brand]
                      : selectedBrands.filter(b => b !== brand);
                    setSelectedBrands(newSelectedBrands);
                    handleTempFilterChange({ brands: newSelectedBrands });
                  }}
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Año */}
      <div className="mb-4 border-b pb-2">
        <button
          className="flex justify-between items-center w-full text-left font-medium text-gray-800"
          onClick={() => toggleSection('año')}
        >
          Año
          <svg
            className={`w-5 h-5 transition-transform ${
              expandedSection === 'año' ? 'transform rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSection === 'año' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-4 px-2">
            <div className="flex justify-between mb-4">
              <div className="flex-1 mr-2">
                <label className="text-xs text-gray-600 mb-0.5 block">Desde</label>
                <select
                  className="w-full px-2 border rounded text-sm h-7"
                  style={{
                    fontSize: '14px',
                    backgroundColor: 'white'
                  }}
                  value={yearRange[0]}
                  size={1}
                  onChange={(e) => {
                    const newMin = Number(e.target.value)
                    const newRange: [number, number] = [newMin, Math.max(newMin, yearRange[1])]
                    setYearRange(newRange)
                    handleTempFilterChange({
                      minYear: newRange[0],
                      maxYear: newRange[1]
                    })
                  }}
                >
                  {Array.from({ length: 16 }, (_, i) => 2025 - i).map((year) => (
                    <option key={year} value={year} className="py-0.5">
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 ml-2">
                <label className="text-xs text-gray-600 mb-0.5 block">Hasta</label>
                <select
                  className="w-full px-2 border rounded text-sm h-7"
                  style={{
                    fontSize: '14px',
                    backgroundColor: 'white'
                  }}
                  value={yearRange[1]}
                  size={1}
                  onChange={(e) => {
                    const newMax = Number(e.target.value)
                    const newRange: [number, number] = [Math.min(yearRange[0], newMax), newMax]
                    setYearRange(newRange)
                    handleTempFilterChange({
                      minYear: newRange[0],
                      maxYear: newRange[1]
                    })
                  }}
                >
                  {Array.from({ length: 16 }, (_, i) => 2025 - i).map((year) => (
                    <option key={year} value={year} className="py-0.5">
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kilometraje */}
      <div className="mb-4 border-b pb-2">
        <button
          className="flex justify-between items-center w-full text-left font-medium text-gray-800"
          onClick={() => toggleSection('kilometraje')}
        >
          Kilometraje
          <svg
            className={`w-5 h-5 transition-transform ${
              expandedSection === 'kilometraje' ? 'transform rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSection === 'kilometraje' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-4 px-2">
            <div className="flex justify-between mb-4">
              <div className="flex-1 mr-2">
                <label className="text-xs text-gray-600 mb-0.5 block">Desde</label>
                <input
                  type="text"
                  value={`${kmRange[0].toLocaleString()} km`}
                  className="w-full p-2 border rounded text-sm"
                  readOnly
                />
              </div>
              <div className="flex-1 ml-2">
                <label className="text-xs text-gray-600 mb-0.5 block">Hasta</label>
                <input
                  type="text"
                  value={`${kmRange[1].toLocaleString()} km`}
                  className="w-full p-2 border rounded text-sm"
                  readOnly
                />
              </div>
            </div>
            
            <Box sx={{ px: 1 }}>
              <Slider
                value={kmRange}
                onChange={(e: Event, newValue: number | number[]) => {
                  const [min, max] = newValue as number[]
                  setKmRange([min, max])
                  handleTempFilterChange({
                    minKm: min,
                    maxKm: max
                  })
                }}
                min={0}
                max={300000}
                step={1000}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value.toLocaleString()} km`}
                sx={{
                  color: '#2563eb',
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: '0 0 0 8px rgba(37, 99, 235, 0.16)',
                    },
                  },
                  '& .MuiSlider-track': {
                    height: 4,
                  },
                  '& .MuiSlider-rail': {
                    height: 4,
                    opacity: 0.2,
                  },
                }}
              />
            </Box>
          </div>
        </div>
      </div>

      {/* Botón de reset */}
      <div className="mt-4">
        <button
          onClick={handleResetFilters}
          className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 transition-colors"
        >
          Limpiar Filtros
        </button>
      </div>
    </div>
  )
}
import CarList from '@/components/CarList'

export default function Catalogo() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          Nuestros Vehículos Disponibles
        </h1>
        <CarList />
      </div>
    </div>
  )
}
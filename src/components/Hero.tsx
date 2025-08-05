export default function Hero() {
  return (
    <div className="bg-primary">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="text-center pb-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Los Mejores Autos Usados</span>
            <span className="block text-accent">Con Garantía</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
            Viví la experiencia de tu nuevo auto.
          </p>
        </div>
        
        {/* Decorative border with gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"></div>
      </div>
    </div>
  )
} 
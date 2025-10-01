import React, { useRef } from 'react';
import CardEcommerce from '../CardEcommerce/CardEcommrce';
import IconoFlechaDerecha from '../../assets/icons/IconoFlechaDerecha.svg';
import IconoFlechaIzquierda from '../../assets/icons/IconoFlechaIzquierda.svg';



interface Product {
  id: number;
  imageUrl: string;
  productName: string;
  price: number;
  sellerName: string;
}

interface ProductCarouselProps {
  title: string;
  subtitle: string;
  products: Product[];
  onAddToCart: (productName: string) => void;
}



const ArrowIcon: React.FC<{
  direction: 'left' | 'right';
  onClick: () => void;
}> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    
    className={`
      absolute top-1/2 transform -translate-y-1/2 
      bg-white text-gray-800 p-3 rounded-full shadow-xl 
      hover:bg-blue-600 hover:text-white transition duration-200 
      hidden md:block z-10
      ${direction === 'left' ? 'left-0 ml-[-20px]' : 'right-0 mr-[-20px]'}
    `}
    
  >
    {direction === 'right' ? (
      <img src={IconoFlechaDerecha} alt="Flecha Derecha" className="w-5 h-5" />
    ) : (
      <img src={IconoFlechaIzquierda} alt="Flecha Izquierda" className="w-5 h-5" />
    )}
  </button>
);



const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  subtitle,
  products,
  onAddToCart,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollDistance = 320;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-transparent py-16 sm:py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y Subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl  mb-3">{title}</h2>
          <p className="text-gray-300 text-lg">{subtitle}</p>
        </div>

        {/* Contenedor del Carrusel y Navegación */}
        <div className="relative">
          {/* Flecha Izquierda */}
          <ArrowIcon
            direction="left"
            onClick={scrollLeft}
          />

          {/* Contenedor Deslizable */}
          <div
            ref={carouselRef}
            // overflow-x-scroll no-scrollbar: permite el scroll horizontal y oculta la barra
            // space-x-6: espacio entre las tarjetas
            className="flex overflow-x-scroll no-scrollbar space-x-24 p-10"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                // flex-shrink-0: evita que la tarjeta se encoja
                // w-80: ancho fijo de la tarjeta
                className="flex-shrink-0 w-80 sm:w-96"
                style={{ scrollSnapAlign: 'start' }}
              >
                <CardEcommerce
                  imageUrl={product.imageUrl}
                  productName={product.productName}
                  price={product.price}
                  sellerName={product.sellerName}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>

          {/* Flecha Derecha */}
          <ArrowIcon
            direction="right"
            onClick={scrollRight}
          />
        </div>
      </div>

      {/* Estilo Global para ocultar la barra de scroll (necesario para no-scrollbar) */}
      <style
        jsx
        global
      >{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default ProductCarousel;

import React from 'react';

// Definición de las propiedades (props) que el componente CardEcommerce aceptará
interface CardEcommerceProps {
  imageUrl: string; // La URL de la imagen del producto
  productName: string; // El nombre del producto (ej: "Smartphone IA-X Pro")
  price: number; // El precio del producto (ej: 999.99)
  sellerName: string; // El nombre del vendedor (ej: "TecnoGlobal S.A.")
  onAddToCart: (productName: string) => void; // Función a llamar cuando se haga clic en "Agregar al Carrito"
}

const CardEcommerce: React.FC<CardEcommerceProps> = ({
  imageUrl,
  productName,
  price,
  sellerName,
  onAddToCart,
}) => {
  return (
    // Contenedor principal de la tarjeta con estilos de Tailwind CSS
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 max-w-sm mx-auto transition-transform duration-200 hover:scale-105">
      
      {/* Sección de la imagen del producto */}
      <div className="w-full h-48 sm:h-56 bg-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src={imageUrl}
          alt={productName}
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Contenido de texto y botón de la tarjeta */}
      <div className="p-4 sm:p-6">
        {/* Nombre del producto */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 leading-tight">
          {productName}
        </h3>

        {/* Precio del producto */}
        <p className="text-blue-600 font-bold text-2xl sm:text-3xl mb-3">
          ${price.toFixed(2)} {/* Formatea el precio a dos decimales */}
        </p>

        {/* Nombre del vendedor */}
        <p className="text-gray-500 text-sm sm:text-base mb-5">
          {sellerName}
        </p>

        {/* Botón para "Agregar al Carrito" */}
        <button
          onClick={() => onAddToCart(productName)} // Llama a la función onAddToCart con el nombre del producto
          className="w-full bg-blue-600 text-black py-2.5 px-4 rounded-lg font-medium text-lg 
                     hover:bg-blue-700 transition duration-200 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default CardEcommerce;
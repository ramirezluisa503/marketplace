import Layout from '@/components/layout/layout';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import ProductGrid from '../../components/ProductGrid/ProductGrid'; 
import * as React from 'react';


import celular from '../../assets/images/Celular.webp';
import auriculares from '../../assets/images/Auriculares.webp';
import monitor from '../../assets/images/Monitor.webp';
import reloj from '../../assets/images/Reloj.webp';


const dummyCarouselProducts = [
    { id: 1, imageUrl: celular, productName: "Smartphone IA-X Pro", price: 999.99, sellerName: "TecnoGlobal S.A." },
    { id: 2, imageUrl: auriculares, productName: "Auriculares Quantum Sound", price: 199.99, sellerName: "AudioGenius Co." },
    { id: 3, imageUrl: monitor, productName: "Monitor UltraView 27''", price: 459.99, sellerName: "VisualTech Corp." },
    { id: 4, imageUrl: reloj, productName: "Smartwatch Fitness Pro", price: 149.50, sellerName: "HealthTech Labs" },
];

// Productos para el Grid (Todos los Productos)
const allGridProducts = [
    { id: 5, productName: "Silla de Oficina Ergonómisc", price: 320.00, imageUrl: "https://images.unsplash.com/photo-1594950005540-305105244585", sellerName: "Muebles Hoy" },
    { id: 6, productName: "Set de Cuchillos de Cocina", price: 85.00, imageUrl: "https://images.unsplash.com/photo-1543884841-2489e229c1e9", sellerName: "Chef Supplies" },
    { id: 7, productName: "Cámara Digital Mirrorless", price: 675.00, imageUrl: "https://images.unsplash.com/photo-1510414986438-b7697486f0c4", sellerName: "Foto Pro" },
    { id: 8, productName: "Smartwatch Fitness Track", price: 120.00, imageUrl: "https://images.unsplash.com/photo-1582218084661-39649511674a", sellerName: "HealthTech Labs" },
    { id: 9, productName: "Silla de Oficina Ergonómisc", price: 320.00, imageUrl: "https://images.unsplash.com/photo-1594950005540-305105244585", sellerName: "Muebles Hoy" },
    { id: 10, productName: "Set de Cuchillos de Cocina", price: 85.00, imageUrl: "https://images.unsplash.com/photo-1543884841-2489e229c1e9", sellerName: "Chef Supplies" },
    { id: 11, productName: "Cámara Digital Mirrorless", price: 675.00, imageUrl: "https://images.unsplash.com/photo-1510414986438-b7697486f0c4", sellerName: "Foto Pro" },
    { id: 12, productName: "Smartwatch Fitness Track", price: 120.00, imageUrl: "https://images.unsplash.com/photo-1582218084661-39649511674a", sellerName: "HealthTech Labs" },
    
];


// --- 3. Función de Manejo de Eventos ---
const handleAddToCart = (productName: string) => {
    console.log(`Producto agregado al carrito: ${productName}`);
};


interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Layout>
      
      {/* Contenedor Principal con el Fondo Degradado Global */}
      <div className='[background-image:linear-gradient(to_bottom,#031d42,#155cc1,#ffffff,#a9bfcc,#235a7c)]'>
        
        {/* ======================================================= */}
        {/* 1. PRODUCT CAROUSEL (Productos Destacados - POSICIÓN SUPERIOR) */}
        {/* ======================================================= */}
        <ProductCarousel
          title="Productos Destacados"
          subtitle="Descubre las mejores ofertas y los artículos más populares del momento."
          products={dummyCarouselProducts} 
          onAddToCart={handleAddToCart} 
        />

        {/* ======================================================= */}
        {/* 2. SECCIÓN DE CATEGORÍAS */}
        {/* ======================================================= */}
        <div className="p-10 md:p-20 w-full"> 
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-gray-800">
                    Explorar por Categoría
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                    Encuentra exactamente lo que buscas con nuestras categorías bien organizadas.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {/* Ítems de Categoría (Mantenidos) */}
                <a href="#" className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-slate-300/60 backdrop-blur-sm text-gray-900">
                    <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1.42.365a1 1 0 00-1.127.243l-.707.707a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 00-1.748-.035l-1.898 3.796a1 1 0 01-1.493.072l-1.414-1.414a1 1 0 00-.707-1.707l-1.707-1.707a1 1 0 010-1.414l.707-.707a1 1 0 00.243-1.127L5.5 14.25V9.75m9.75 0V9m0 0l-1.42.365a1 1 0 00-1.127.243l-.707.707a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 00-1.748-.035l-1.898 3.796a1 1 0 01-1.493.072l-1.414-1.414a1 1 0 00-.707-1.707l-1.707-1.707a1 1 0 010-1.414l.707-.707a1 1 0 00.243-1.127L5.5 14.25V9.75"></path></svg>
                    <span className="text-base font-semibold">Tecnología</span>
                </a>
                <a href="#" className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-slate-600/60 backdrop-blur-sm text-white">
                    <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6m-6 0h.01"></path></svg>
                    <span className="text-base font-semibold">Hogar</span>
                </a>
                <a href="#" className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-green-600/60 backdrop-blur-sm text-white">
                    <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 01-2.5 2.5h-1.5a1 1 0 01-1-1v-2.75"></path></svg>
                    <span className="text-base font-semibold">Moda</span>
                </a>
                <a href="#" className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-teal-500/60 backdrop-blur-sm text-white">
                    <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19v-5.5m0 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 0H7v-4m4 4h4m-4 0v4.5"></path></svg>
                    <span className="text-base font-semibold">Gaming</span>
                </a>
                <a href="#" className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-red-500/60 backdrop-blur-sm text-white">
                    <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.75V4.5M12 6.75a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H7.5a2.25 2.25 0 01-2.25-2.25V9a2.25 2.25 0 012.25-2.25h4.5z"></path></svg>
                    <span className="text-base font-semibold">Libros</span>
                </a>
                <a href="#" className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-blue-500/60 backdrop-blur-sm text-white">
                    <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a4 4 0 004-4m-12 0h12m-6 0L12 9l-6 6"></path>
                    </svg>
                    <span className="text-base font-semibold">Sostenible</span>
                </a>
            </div>
        </div>

        {/* ======================================================= */}
        {/* 3. PRODUCT GRID (Todos los productos - ABAJO DE CATEGORÍAS) */}
        {/* ======================================================= */}
        <ProductGrid
            title="Todos los Productos"
            subtitle="Desde gadgets tecnológicos hasta moda y artículos para el hogar, lo tenemos todo."
            products={allGridProducts}
            onAddToCart={handleAddToCart}
        />
        
      </div>
      
    </Layout>
  );
};

export default Home;
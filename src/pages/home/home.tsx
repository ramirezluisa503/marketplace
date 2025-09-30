import Layout from '@/components/layout/layout';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import * as React from 'react';

import celular from '../../assets/images/Celular.webp';
import auriculares from '../../assets/images/Auriculares.webp';
import monitor from '../../assets/images/Monitor.webp';
import reloj from '../../assets/images/Reloj.webp';

import IconoLaptop from '../../assets/icons/IconoLaptop.svg';
import IconoCasa from '../../assets/icons/IconoCasa.svg';
import IconoCamisa from '../../assets/icons/IconoCamisa.svg';
import IconoControl from '../../assets/icons/IconoControl.svg';
import IconoLibro from '../../assets/icons/IconoLibro.svg';
import IconoSostenible from '../../assets/icons/IconoSostenible.svg';

import Grid1 from '../../assets/images/Grid1.webp';
import Grid2 from '../../assets/images/Grid2.webp';
import Grid3 from '../../assets/images/Grid3.webp';
import Grid4 from '../../assets/images/Grid4.webp';
import Grid5 from '../../assets/images/Grid5.webp';
import Grid6 from '../../assets/images/Grid6.webp';
import Grid7 from '../../assets/images/Grid7.webp';
import Grid8 from '../../assets/images/Grid8.webp';

const dummyCarouselProducts = [
  {
    id: 1,
    imageUrl: celular,
    productName: 'Smartphone IA-X Pro',
    price: 999.99,
    sellerName: 'TecnoGlobal S.A.',
  },
  {
    id: 2,
    imageUrl: auriculares,
    productName: 'Auriculares Quantum Sound',
    price: 199.99,
    sellerName: 'AudioGenius Co.',
  },
  {
    id: 3,
    imageUrl: monitor,
    productName: "Monitor UltraView 27''",
    price: 459.99,
    sellerName: 'VisualTech Corp.',
  },
  {
    id: 4,
    imageUrl: reloj,
    productName: 'Smartwatch Fitness Pro',
    price: 149.5,
    sellerName: 'HealthTech Labs',
  },
];

// Productos para el Grid (Todos los Productos)
const allGridProducts = [
  {
    id: 5,
    productName: 'Silla de Oficina Ergonómisc',
    price: 320.0,
    imageUrl: Grid1,
    sellerName: 'Muebles Hoy',
  },
  {
    id: 6,
    productName: 'Set de Cuchillos de Cocina',
    price: 85.0,
    imageUrl: Grid2,
    sellerName: 'Chef Supplies',
  },
  {
    id: 7,
    productName: 'Cámara Digital Mirrorless',
    price: 675.0,
    imageUrl: Grid3,
    sellerName: 'Foto Pro',
  },
  {
    id: 8,
    productName: 'Smartwatch Fitness Track',
    price: 120.0,
    imageUrl: Grid4,
    sellerName: 'HealthTech Labs',
  },
  {
    id: 9,
    productName: 'Altavoz Bluetooth Portátil',
    price: 55.0,
    imageUrl: Grid5,
    sellerName: 'Muebles Hoy',
  },
  {
    id: 10,
    productName: 'Laptop Gaming Xtreme',
    price: 1500.0,
    imageUrl: Grid6,
    sellerName: 'Chef Supplies',
  },
  {
    id: 11,
    productName: 'Kit de Yoga Esencial',
    price: 45.0,
    imageUrl: Grid7,
    sellerName: 'Foto Pro',
  },
  {
    id: 12,
    productName: 'Cuaderno de Cuero Artesanal',
    price: 30.0,
    imageUrl: Grid8,
    sellerName: 'HealthTech Labs',
  },
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
      <div className="[background-image:linear-gradient(to_bottom,#031d42,#155cc1,#ffffff,#a9bfcc,#235a7c)]">
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
              Encuentra exactamente lo que buscas con nuestras categorías bien
              organizadas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Ítems de Categoría (Mantenidos) */}
            <a
              href="#"
              className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-slate-300/60 backdrop-blur-sm text-gray-900"
            >
              <img
                src={IconoLaptop}
                alt="Icono Laptop"
              />
              <div className="text-xl text-white font-sbold">Tecnología</div>
            </a>
            <a
              href="#"
              className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-slate-600/60 backdrop-blur-sm text-white"
            >
              <img
                src={IconoCasa}
                alt="Icono Laptop"
              />
              <div className="text-xl text-white font-sbold">Hogar</div>
            </a>
            <a
              href="#"
              className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-green-600/60 backdrop-blur-sm text-white"
            >
              <img
                src={IconoCamisa}
                alt="Icono Laptop"
              />
              <div className="text-xl text-white font-sbold">Moda</div>
            </a>
            <a
              href="#"
              className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-teal-500/60 backdrop-blur-sm text-white"
            >
              <img
                src={IconoControl}
                alt="Icono Laptop"
              />
              <div className="text-xl text-white font-sbold">Gaming</div>
            </a>
            <a
              href="#"
              className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-red-500/60 backdrop-blur-sm text-white"
            >
              <img
                src={IconoLibro}
                alt="Icono Laptop"
              />
              <div className="text-xl text-white font-sbold">Libros</div>
            </a>
            <a
              href="#"
              className="w-36 h-36 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center justify-center bg-blue-500/60 backdrop-blur-sm text-white"
            >
              <img
                src={IconoSostenible}
                alt="Icono Laptop"
              />
              <div className="text-xl text-white font-sbold">Sostenible</div>
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

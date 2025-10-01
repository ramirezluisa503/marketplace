import React from 'react';
// Asegúrate de que la ruta sea correcta
import CardEcommerce from '../CardEcommerce/CardEcommrce'; 

// --- 1. Definiciones de Tipos ---

interface Product {
    id: number;
    imageUrl: string;
    productName: string;
    price: number;
    sellerName: string; 
}

interface ProductGridProps {
    title: string;
    subtitle: string;
    products: Product[];
    onAddToCart: (productName: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
    title, 
    subtitle, 
    products, 
    onAddToCart 
}) => {
    return (
        // **Fondo Transparente:** No tiene clases 'bg-*'. Solo padding vertical.
        <section className="py-12 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Título y Subtítulo */}
                <div className="text-center mb-10 sm:mb-16">
                    {/* El texto debe ser oscuro para contrastar con el fondo claro de la página (que ya tienes en el degradado de Home.tsx) */}
                    <h2 className="text-3xl sm:text-4xl text-black">{title}</h2>
                    <p className="text-base text-black mt-2">{subtitle}</p>
                </div>

                {/* Contenedor de la Cuadrícula (Grid) */}
                <div 
                    className="grid gap-6 sm:gap-8 justify-center
                               grid-cols-1       /* 1 columna por defecto (móvil) */
                               sm:grid-cols-2    /* 2 columnas en pantallas pequeñas (sm) */
                               lg:grid-cols-3    /* 3 columnas en pantallas grandes (lg) */
                               xl:grid-cols-4    /* 4 columnas en pantallas extra-grandes (xl) */"
                >
                    {products.map((product) => (
                        <CardEcommerce
                            key={product.id}
                            imageUrl={product.imageUrl}
                            productName={product.productName}
                            price={product.price}
                            sellerName={product.sellerName}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
import * as React from 'react';
import IconoLupa from '../../assets/icons/IconoLupa.svg'
import IconoCarrito from '../../assets/icons/IconoCarrito.svg'


const Header: React.FC = () => {
    return (
      
        <header className="bg-white w-screen shadow-md p-4 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between space-x-8">
                
                {/* Logo y Navegación Principal */}
                <div className="flex items-center space-x-10">
                    <div className="text-2xl font-bold text-gray-900">
                        LOGO
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 transition duration-150">Inicio</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-150">Categorías</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-150">Oferta</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-150">Contacto</a>
                    </nav>
                </div>

                {/* Barra de Búsqueda Centrada */}
                <div className="flex-1 max-w-xl relative mx-8 hidden lg:block">
                    <input
                        type="text"
                        placeholder="Buscar productos, marcas..."
                        className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* Icono de búsqueda (SVG) */}
                    <img className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 ' src={IconoLupa} alt="Icono Lupa" />
                    
                </div>

                {/* Botones de Usuario y Carrito */}
                <div className="flex items-center space-x-4">

                    <button className="px-4 py-2 text-black hover:bg-gray-100 rounded-lg transition duration-150">
                        Iniciar Sesión
                    </button>
                    <button className="bg-[#031d42] text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 font-medium">
                        Registrarse
                    </button>
                    
                    {/* Icono de Carrito */}
                    <a href="#" className="text-gray-600 hover:text-blue-600 p-2 ">
                      <img className='size-7' src={IconoCarrito} alt="Icono Carrito" />
                    </a>
                </div>
            </div>
        </header>
    );
};


// ----------------------------------------------------------------------
// 2. Componente Principal: Layout
// ----------------------------------------------------------------------

interface ILayoutProps {
    /** El contenido de la página que se mostrará dentro del cuerpo principal. */
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
       
        <div className="min-h-screen w-screen bg-gray-50 flex flex-col">
            
            {/* El Header con la navegación y la barra de búsqueda */}
            <Header />

            {/* El Contenido principal (donde se renderizarán los 'children') */}
            {/* flex-grow permite que este 'main' ocupe todo el espacio restante */}
            <main className="flex-grow w-screen container mx-auto  sm:p-6 lg:p-8">
                {children}
            </main>

        </div>
    );
}

export default Layout;
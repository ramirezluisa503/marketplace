import * as React from 'react';
import Sidebar from '../sidebar/sidebar';

interface ILayoutProps{

}

const Layout: React.FunctionComponent<ILayoutProps>=(props)=>{
    return (
        <div className='flex bg-white'>
            <aside className='flex gap-x-4 bg-gray-800 fixed top-0 left-0 z-40 lg:w-60 h-screen'>
                <Sidebar />
            </aside>
            <div></div>
            <aside></aside>
        </div>
    ) ;
}

export default Layout;
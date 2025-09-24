import * as React from 'react';
import Sidebar from '../sidebar/sidebar';

interface ILayoutProps{

}

const Layout: React.FunctionComponent<ILayoutProps>=({children})=>{
    return (
        
      <div >{children}</div>
        
    ) ;
}

export default Layout;
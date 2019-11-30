import React from 'react';
import Header from '../shared/Header';

function BaseLayout(props){
    const { className, children } = props;
    const headerType = props.headerType || "default"
    return(
       <div className="layout-container">
           {/* {headerType ==="index" && <Header className="port-nav-index"/>}
           {headerType ==="default" && <Header className="port-nav-default"/>} */}
           <Header className={`port-nav-${headerType}`}/>
           <main className={`cover ${className}`}>
               <div className="wrapper">
                   {children}
               </div>
           </main>
       </div>
    )
}

export default BaseLayout;
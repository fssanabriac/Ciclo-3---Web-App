import React from 'react'
import Footer from 'components/Footer'
import NavbarSeller from 'components/navbarSeller';

const PrivateLayoutSeller = ({children}) => {
    return (
        <div className='mainContainer'>
            <NavbarSeller/>
            <h5>This is the private Layout for sellers</h5>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default PrivateLayoutSeller;

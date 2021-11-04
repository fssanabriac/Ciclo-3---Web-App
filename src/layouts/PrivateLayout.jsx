import React from 'react'
import Footer from 'components/Footer'
import NavbarAdmin from 'components/navbarAdmin';

const PrivateLayout = ({children}) => {
    return (
        <div className='mainContainer'>
            <NavbarAdmin/>
            {/* <h5>This is the private Layout for admins</h5> */}
            <main className='flex-col-j-a-center'>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default PrivateLayout;

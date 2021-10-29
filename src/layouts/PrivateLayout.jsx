import React from 'react'
import Footer from 'components/Footer'

const PrivateLayout = ({children}) => {
    return (
        <div className='mainContainer'>
            <h5>This is the private Layout</h5>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default PrivateLayout;

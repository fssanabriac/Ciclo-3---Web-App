
import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const HomeLayout = ({children}) => {
    return (
        <div className='mainContainer'>
            <Header/>
            <main className='HomeLayout__main'>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default HomeLayout

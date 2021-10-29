
import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const HomeLayout = ({children}) => {
    return (
        <div className='mainContainer'>
            <Header/>
            <main className='mainLayout'>
                This is the main section
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default HomeLayout

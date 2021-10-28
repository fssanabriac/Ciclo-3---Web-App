
import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({children}) => {
    return (
        <div className='mainContainer'>
            <Header/>
            <main>
                This is the main section
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout

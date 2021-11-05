import React from 'react'
import Footer from 'components/Footer'

const LoginLayout = ({children}) => {
    return (
        <div className='Login__Layout__mainContainer'>
            {/* <h5>This is the login layout</h5> */}
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default LoginLayout

import React from 'react'

const LoginLayout = ({children}) => {
    return (
        <div>
            <h2>This is the login loyout</h2>
            <main>
                {children}
            </main>
        </div>
    )
}

export default LoginLayout

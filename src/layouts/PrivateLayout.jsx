import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div>
            This is the private Layout
            <main>
                {children}
            </main>
        </div>
    )
}

export default PrivateLayout


import { Link } from 'react-router-dom'
import Logo from 'components/logo'
import React from 'react'

const Register = () => {
    return (
        <div>
            <h3>This is the register Page </h3>
            <Link to="/">
                <Logo/>
            </Link>
        </div>
    )
}

export default Register

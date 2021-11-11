
import { Link } from 'react-router-dom'
import Logo from 'components/logo'
import React from 'react'


const Register = () => {
    return (
        <div className='Register__container'>
            
            <div className= 'Register_login_header'>
                <Link className='Register_login__logo' to="/">
                    <Logo />
                </Link>
            </div>
            <h2 className='register_title'>Registrate!</h2>
            <form action="" className='Register__form'>
                <div className='Register__inputs'>
                        <input type="text" placeholder='Nombre' required />
                        <input type="text" placeholder='Apellidos' required />
                        <input type="email" placeholder='Correo Electrónico' required />
                        <input type="password" placeholder='Contraseña' required />
                </div>
                <div className='notifications_check'>
                    <label htmlFor='Notifications_check'>
                        <input type="checkbox" name='Notify_me'/>
                        Recibir notificaciones
                    </label>
                </div>
                <div>
                    <Link to='/admin'>
                        <button className='Register__submit' type='submit'>Registrar</button>
                    </Link>
                </div>
                <div className='Register__login'>
                    <span>¿Ya tienes cuenta?</span> 
                    <Link className='Register__login_link' to='/login'>
                        <div className='login_redirect'>Ingresa aqui</div>
                    </Link>
                </div>
                <div >
                    <button className='Login__Google'>
                        Registrarse con Google
                    </button>
                </div>
            </form>
        </div>
        
    )
}

export default Register

import {Link} from 'react-router-dom'

function Login(){
    return(
        <div className='Login__container'>
            <h2 className='login-title'>Inicia Sesión</h2>
            <form action="" className='Login__form'>
                <div className='Login__inputs'>
                        <input type="email" placeholder='Correo Electrónico' required />
                        <input type="password" placeholder='Contraseña' required />
                </div>
                <div className='Login__rememberForget'>
                    <label htmlFor='remember_me'>
                        <input type="checkbox" name='remember_me'/>
                        Remember me
                    </label>
                    <Link className='Login__rememberForget__Link' to='/recover'>
                        <div>Olvide mi Contraseña</div>
                    </Link>
                </div>
                <div>
                    <Link to='/admin'>
                        <button className='Login__submit' type='submit'>Inicia Sesión</button>
                    </Link>
                </div>
                <div className='Login__register'>
                    <span>¿No tienes cuenta?</span> 
                    <Link className='Login__register__Link' to='/sign-in'>
                        <div>Regístrate</div>
                    </Link>
                </div>
                <div >
                    <button className='Login__Google'>
                        Continua con Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
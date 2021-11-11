import { Link } from 'react-router-dom';
import Logo from './logo';

function Header(){
    return(
        <header >
            <Link className='Header__logo' to='/'>
                <Logo/>
            </Link>
            <div className = 'log-container'>
                <Link to='sign-in'>
                    <button className='Header__register-btn'>Registrarse</button>
                </Link>
                <Link to='login'>
                    <button className='Header__login-btn'>Ingresar</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
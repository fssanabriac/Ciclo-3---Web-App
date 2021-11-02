import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header >
            <Link className='Header__logo' to='/'>
                <div>
                    <FontAwesomeIcon icon={faBook} />
                    <span className='Header__Icon'>BooKing</span>
                </div>
            </Link>
            <div >
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
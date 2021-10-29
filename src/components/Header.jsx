import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header >
            <Link className='Header__logo' to='/'>
                <div>
                    <FontAwesomeIcon icon={faBook} />
                    <span className='Header__Icon'>Enterprise</span>
                </div>
            </Link>
            <div >
                <Link to='sign-in'>
                    <button>Registrarse</button>
                </Link>
                <Link to='login'>
                    <button>Ingresar</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook} from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(
        <div className='Header'>
            <div>
                <FontAwesomeIcon icon={faBook} />
                <span className='Header__Icon'>Enterprise</span>
            </div>
            <div >
                <span className='Header__span'>Registrarse</span>
                <span className='Header__span'>Ingresar</span>
            </div>
        </div>
    );
}

export default Header;
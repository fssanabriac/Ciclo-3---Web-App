import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
    return (
        <div className='navbar'>
            <div >
                <Link className='navbar__logo' to='/admin'>
                    <div>
                        <FontAwesomeIcon icon={faBook} />
                        <span className='Header__Icon'>BooKing</span>
                    </div>
                </Link>
            </div>
            <div>
                <ul className='navbar__ul'>
                    <Link className='navbar__link' to='/admin/products'>
                        <li className='navbar__li'>
                            <div >Productos</div>
                        </li>
                    </Link>
                    <Link className='navbar__link' to='/admin/sells'>
                        <li className='navbar__li'>Ventas </li>
                    </Link>
                    <Link className='navbar__link' to='/admin/users'>
                        <li className='navbar__li'>Usuarios </li>
                    </Link>
                </ul>
            </div>
            <div>
                <Link className='navbar__logout' to='/'>
                    Cerrar sesión
                </Link>
            </div>
        </div>
    );
}

export default NavbarAdmin;

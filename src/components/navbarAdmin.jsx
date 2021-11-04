import React from 'react'
import { Link } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from 'components/logo'
import { faBook, faBoxOpen, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons';

const NavbarAdmin = () => {
    return (
        <div className='navbar'>
            <div >
                <Link className='navbar__logo' to='/admin'>
                    <FontAwesomeIcon icon={faBook}/>
                    BooKing
                </Link>
            </div>
            <div>
                <ul className='navbar__ul'>
                    <Link className='navbar__link' to='/admin/products'>
                        <li className='navbar__li'>
                            <FontAwesomeIcon icon={faBoxOpen}/>
                            <div className='navbar__li__text'>Productos</div>
                        </li>
                    </Link>
                    <Link className='navbar__link' to='/admin/sells'>
                        <li className='navbar__li'>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            <div className='navbar__li__text'>Ventas</div> </li>
                    </Link>
                    <Link className='navbar__link' to='/admin/users'>
                        <li className='navbar__li'>
                            <FontAwesomeIcon icon={faUsers}/>
                            <div className='navbar__li__text'>Usuarios</div>
                        </li>
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

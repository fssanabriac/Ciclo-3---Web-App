import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from 'components/logo'
import { faBoxOpen, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons';
import useIsActiveNavbar from 'hooks/useIsActiveNavbar';

const NavbarAdmin = () => {

    return (
        <div className='navbar'>
            <div >
                <Link className='navbar__logo' to='/admin'>
                    <Logo/>
                </Link>
            </div>
            <div>
                <ul className='navbar__ul'>
                    <Ruta ruta='/admin/products' icon={faBoxOpen} texto='Productos'/>
                    <Ruta ruta='/admin/sells' icon={faShoppingCart} texto='Ventas'/>
                    <Ruta ruta='/admin/users' icon={faUsers} texto='Usuarios'/>
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

const Ruta = ({ruta, icon, texto})=>{
    const isActive = useIsActiveNavbar({ruta});

    return(
        <Link className='navbar__link' to={ruta}>
            <li className={`navbar__li ${isActive ? 'navbar__li--active':''}`}>
                <FontAwesomeIcon icon={icon} />
                <div className='navbar__li__text'>{texto}</div>
            </li>
        </Link>
    )
}

export default NavbarAdmin;

import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
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
    const location = useLocation();
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {

        if (location.pathname.includes(ruta)){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
        return () => {
           console.log(location) 
        }
    }, [location, ruta])
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

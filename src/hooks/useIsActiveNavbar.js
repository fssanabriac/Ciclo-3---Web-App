import { useEffect, useState } from "react"
import { useLocation } from "react-router"

const useIsActiveNavbar = ({ruta}) => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {

        if (location.pathname.includes(ruta)){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
        return  
    }, [location, ruta])

    return  isActive
}

export default useIsActiveNavbar

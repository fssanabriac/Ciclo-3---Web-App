import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook} from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
    return (
        <div className = 'logo'>
            <FontAwesomeIcon icon={faBook} />
            <span className='Header__Icon'>BooKing</span>
        </div>
    )
}

export default Logo;
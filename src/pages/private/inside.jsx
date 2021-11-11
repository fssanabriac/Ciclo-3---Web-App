import image_slider_1 from 'media/book_1_slider.jpg';
import image_slider_2 from 'media/book_2_slider.jpg';
import image_slider_3 from 'media/book_3_slider.jpg';

const Inside = ({children}) => {
    return (
        <div>
            <h2>Hola <i>Usuario</i>, bienvenido al módulo de gestion de ventas</h2>
            <div className= 'slider'>
                <ul>
                    <li><img src={image_slider_1} alt="" className='slider1'/></li>
                    <li><img src={image_slider_2} alt="" className='slider1'/></li>
                    <li><img src={image_slider_3} alt="" className='slider1'/></li>
                </ul>
            </div>
            {children}
        </div>
    )
}

export default Inside;

import React from 'react'
import Footer from 'components/Footer'
import NavbarAdmin from 'components/navbarAdmin';

const PrivateLayout = ({children}) => {
    return (
        <div className='mainContainer'>
            <NavbarAdmin/>
            {/* <h5>This is the private Layout for admins</h5> */}
            <main >
                <div className='a'></div>
                <div className='center'>
                {children}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam nisi, commodi suscipit enim voluptatem dolores? Ea saepe fugit corrupti cupiditate hic, nihil similique beatae minima delectus facilis vitae architecto?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam nisi, commodi suscipit enim voluptatem dolores? Ea saepe fugit corrupti cupiditate hic, nihil similique beatae minima delectus facilis vitae architecto?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam nisi, commodi suscipit enim voluptatem dolores? Ea saepe fugit corrupti cupiditate hic, nihil similique beatae minima delectus facilis vitae architecto?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam nisi, commodi suscipit enim voluptatem dolores? Ea saepe fugit corrupti cupiditate hic, nihil similique beatae minima delectus facilis vitae architecto?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam nisi, commodi suscipit enim voluptatem dolores? Ea saepe fugit corrupti cupiditate hic, nihil similique beatae minima delectus facilis vitae architecto?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam nisi, commodi suscipit enim voluptatem dolores? Ea saepe fugit corrupti cupiditate hic, nihil similique beatae minima delectus facilis vitae architecto?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam nisi, commodi suscipit enim voluptatem dolores? Ea saepe fugit corrupti cupiditate hic, nihil similique beatae minima delectus facilis vitae architecto?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam nisi, commodi suscipit enim voluptatem dolores? Ea saepe fugit corrupti cupiditate hic, nihil similique beatae minima delectus facilis vitae architecto?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam nisi, commodi suscipit enim voluptatem dolores? Ea saepe fugit corrupti cupiditate hic, nihil similique beatae minima delectus facilis vitae architecto?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam nisi, commodi suscipit enim voluptatem dolores? Ea saepe fugit corrupti cupiditate hic, nihil similique beatae minima delectus facilis vitae architecto?
                </div>
                <div className='a'></div>
            </main>
            <Footer/>
        </div>
    );
}

export default PrivateLayout;

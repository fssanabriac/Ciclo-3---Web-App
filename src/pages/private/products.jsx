import React, {useEffect, useState} from 'react'

const Products = () => {
    const [verTabla, setVerTabla] = useState(true);
    const [textButton, setTextButton] = useState('Crear Producto');
    
    
    useEffect( (e) =>{
        if (verTabla){
            setTextButton('Crear Producto');
        }else{
            setTextButton('Ver Lista de Productos');
        }
    },[verTabla])
    return (
        <div>
            This is the products page.
            <button onClick={() => { setVerTabla(!verTabla); }} className='test--button'>
                {textButton};
            </button>
            {verTabla ? <ListProducts/> : <UpdateProducts/>}
        </div>
    );
}

const ListProducts = () => {
    return <div className='test--listaProductos'> 
        <h2>Lista de Productos</h2>
        <div className='test--table'>Table</div>
      </div>

};

const UpdateProducts = () => {
    return <div className='test--modificarProductos'> 
        <h2>Crear nuevo producto</h2>
        <ul>
            <li>Identificador</li>
            <li>Descripcion</li>
            <li>Valor Unitario</li>
            <li>Estado (Disponible/No Disponible)</li>
        </ul>
      </div>
};

export default Products;

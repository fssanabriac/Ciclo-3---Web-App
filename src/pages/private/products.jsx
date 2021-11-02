import React, {useEffect, useState} from 'react'

const Products = () => {
    const [verTabla, setVerTabla] = useState(true);
    const [textButton, setTextButton] = useState('Crear Producto');
    const [productos, setProductos] = useState([]); // Recibe la lista de productos del backend

    const listaProductosBackend = [
        {
            id:1,
            description:"Producto 1",
            value: 10000,
            state: "Disponible"
        },
        {
            id:2,
            description:"Producto 2",
            value: 20000,
            state: "Disponible"
        },
        {
            id:3,
            description:"Producto 3",
            value: 30000,
            state: "Disponible"
        },
        {
            id:4,
            description:"Producto 4",
            value: 40000,
            state: "No Disponible"
        }
   ];
    
    useEffect( (e) =>{
        if (verTabla){
            setTextButton('Crear Producto');
        }else{
            setTextButton('Ver Lista de Productos');
        }
    },[verTabla]) // cambia el texto del boton cada que verTabla es modificado

    useEffect((e) =>{
        setProductos(listaProductosBackend);
    },[])

    return (
        <div>
            This is the products page.
            <button onClick={() => { setVerTabla(!verTabla); }} className='test--button'>
                {textButton};
            </button>
            {verTabla ? <ListProducts lista={productos}/> : <UpdateProducts/>}
        </div>
    );
}

const ListProducts = ({lista}) => {
    return <div > 
        <h2>Lista de Productos</h2>
        <table>
            <thead>
                <tr>
                    <th>Identificador</th>
                    <th>Descripción</th>
                    <th>Valor Unitario</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {lista.map((producto) => {
                    return <tr>
                    <td>{producto.id}</td>
                    <td>{producto.description}</td>
                    <td>{producto.value}</td>
                    <td>{producto.state}</td>
                </tr>
                })
                }
            </tbody>
        </table>
      </div>

};

const UpdateProducts = () => {
    return <div > 
        <h2>Crear nuevo producto</h2>
        <form> 
            <label htmlFor="idProdutct">Identificador de Producto
                <input name="idProduct" type="text" />
            </label>
            <label htmlFor="description">Descripción
                <input name="description" type="text" />
            </label>
            <label htmlFor="unitValue">Valor unitario
                <input name="unitValue" type="text" />
            </label>
            <label htmlFor="productState">Identificador de Producto
                <input name="productState" type="text" />
            </label>
            <button type='submit'>Crear producto</button>
        </form>
      </div>
};

export default Products;

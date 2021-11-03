import React, {useEffect, useState, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer position="bottom-right" autoClose={5000}/>
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
                    return <tr key={producto.id}>
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

    const formRef = useRef(null);
    const submitFormulario =(e) =>{
        e.preventDefault();
        const datosFormulario = new FormData(formRef.current)
        const nuevoProducto = {}
        datosFormulario.forEach((value, key)=>{
            nuevoProducto[key] = value
            console.log(nuevoProducto)
        })
        console.log('submited', datosFormulario)
    }
    return <div > 
        <h2>Crear nuevo producto</h2>
        <form ref={formRef} onSubmit={submitFormulario}> 
            <label htmlFor="idProdutct">Identificador de Producto
                <input name="idProduct" type="number" min={0} required/>
            </label>
            <label htmlFor="description">Descripción
                <input name="description" type="text" />
            </label>
            <label htmlFor="unitValue">Valor unitario
                <input name="unitValue" type="number" min={0}required/>
            </label>
            <label htmlFor="productState">Estado
                <input name="productState" type="text" />
            </label>
            <button type='submit' >Crear producto</button>
        </form>
      </div>
};

export default Products;

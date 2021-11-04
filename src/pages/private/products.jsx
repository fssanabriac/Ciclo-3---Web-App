import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
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
        <div className='h-full flex-col-j-start'>
            <div className='Products__title'>
                {verTabla ? <h2>Lista de Productos</h2> : <h2>Crear nuevo producto</h2>} {/* Titulo del contexto */}
                <button onClick={() => { setVerTabla(!verTabla); }} className='Products__title__button'>
                    {textButton};
                </button>
            </div>
            <div className='abc'>
                {verTabla ? <ListProducts lista={productos} /> : <UpdateProducts />}
            </div>
            <ToastContainer position="bottom-right" autoClose={5000}/>
        </div>
    );
}

const ListProducts = ({lista}) => {
    return <div className='Products__container-table'> 

        <table >
            <thead>
                <tr>
                    <th>Identificador</th>
                    <th>Descripción</th>
                    <th>Valor Unitario</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {lista.map((producto) => {
                    return <tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.description}</td>
                        <td>{producto.value}</td>
                        <td>{producto.state}</td>
                        <td className='Products__table__icons'>
                            <FontAwesomeIcon className='Products__table__edit'icon={faEdit}/>
                            <FontAwesomeIcon className='Products__table__remove' icon={faTrash}/>
                        </td>
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
        <form className='Products__form' ref={formRef} onSubmit={submitFormulario}> 
            <label className='Products__form__label' htmlFor="idProdutct">
                Id del Producto
                <input name="idProduct" type="number" min={0} required/>
            </label>
            <label className='Products__form__label' htmlFor="description">
                Descripción
                <input name="description" type="text" />
            </label>
            <label className='Products__form__label' htmlFor="unitValue">
                Valor unitario
                <input name="unitValue" type="number" min={0}required/>
            </label>
            <label className='Products__form__label' htmlFor="productState">
                Estado
                <input name="productState" type="text" />
            </label>
            <button className='Products__form__button' type='submit' >Crear producto</button>
        </form>
      </div>
};

export default Products;

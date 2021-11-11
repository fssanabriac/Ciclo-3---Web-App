import { faCheckSquare, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, {useEffect, useState, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid'
import axios from 'axios'

const Products = () => {
    const [verTabla, setVerTabla] = useState(true);
    const [textButton, setTextButton] = useState('Crear Producto');
    const [productos, setProductos] = useState([]); // Recibe la lista de productos del backend
    const [consultarTabla, setConsultarTabla] = useState(true);

    useEffect(() => {
        const fromBackEnd = async () =>{
        const options = { method: 'GET', url: 'http://localhost:5000/productos' };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setProductos(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    };

        if (consultarTabla){
            fromBackEnd(); 
            setConsultarTabla(false);
        }
    }, [consultarTabla]);

    useEffect( (e) =>{
        if (verTabla){
            setTextButton('Crear Producto');
        }else{
            setTextButton('Ver Lista de Productos');
            setConsultarTabla(true);
        }
    },[verTabla]) // cambia el texto del boton cada que verTabla es modificado

    return (
        <div className='h-full flex-col-j-start'>
            <div className='Products__title'>
                {verTabla ? <h2>Lista de Productos</h2> : <h2>Crear nuevo producto</h2>} {/* Titulo del contexto */}
                <button onClick={() => { setVerTabla(!verTabla) }} className='Products__title__button'>
                    {textButton}
                </button>
                
            </div>
            <div className='abc'>
                {verTabla ? <ListProducts lista={productos} setConsultarTabla={setConsultarTabla}/> : <UpdateProducts setConsultarTabla={setConsultarTabla}/>}
            </div>
            <ToastContainer position="bottom-right" autoClose={5000}/>
        </div>
    );
}

const ListProducts = ({lista, setConsultarTabla}) => {
    return <div className='Products__container-table'> 

        <form>
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
                        return <FilaProducto key={nanoid()} producto={producto} setConsultarTabla={setConsultarTabla}/>
                    })
                    }
                </tbody>
            </table>
        </form>
    </div>
};


const UpdateProducts = ({setConsultarTabla}) => {

    const formRef = useRef(null);
    const submitFormulario = async (e) =>{
        // e.preventDefault();
        const datosFormulario = new FormData(formRef.current)
        const nuevoProducto = {}
        datosFormulario.forEach((value, key)=>{
            nuevoProducto[key] = value
            console.log('\t Here: ' + nuevoProducto)
        })
        console.log('submited', datosFormulario)
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/productos',
            headers: {'Content-Type': 'application/json'},
            data: {
                description: nuevoProducto.description,
                state: nuevoProducto.state,
                price:nuevoProducto.price}
          };
          
        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Producto creado exitosamente.');
            setConsultarTabla(true);
        }).catch(function (error) {
            console.error(error);
            toast.error('No se pudo crear el producto.');
        });
    }
    return <div > 
        <form className='Products__form' ref={formRef} onSubmit={submitFormulario}> 
            {/* <label className='Products__form__label' htmlFor="idProdutct"> */}
                {/* Id del Producto */}
                {/* <input name="idProduct" type="number" min={0} required/> */}
            {/* </label> */}
            <label className='Products__form__label' htmlFor="description">
                Descripción
                <input name="description" type="text" />
            </label>
            <label className='Products__form__label' htmlFor="price">
                Valor unitario
                <input name="price" type="number" min={0}required/>
            </label>
            <label className='Products__form__label' htmlFor="state">
                Estado
                {/* <input name="state" type="text" /> */}
                        <select defaultValue={0} name="state" >
                            <option disabled value={0}>Seleccione el estado</option>
                            <option >Disponible</option>
                            <option >No disponible</option>
                        </select>
            </label>
            <button className='Products__form__button' type='submit' >Crear producto</button>
        </form>
      </div>
};

const FilaProducto = ({producto, setConsultarTabla}) => {
    const [edit, setEdit] = useState(false);
    const [infoNuevoProducto, setInfoNuevoProducto] = useState({
        description : producto.description,
        price : producto.price,
        state : producto.state
        });
    // console.log('infoNuevoProducto', infoNuevoProducto);

    const actualizarProducto = async () => {
        console.log(infoNuevoProducto);
        // enviar al BackEnd.

        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/productos/${producto._id}`,
            headers: {'Content-Type': 'application/json'},
            data: {
                ...infoNuevoProducto,
                id:infoNuevoProducto._id,
                description:infoNuevoProducto.description,
                price: infoNuevoProducto.price,
                state: infoNuevoProducto.state
            }
            // data: {state: 'No Disponible', description: 'LIBRO 5', price: 20000}
          };
          
          await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Producto actualizado con exito.')
            setConsultarTabla(true);
          }).catch(function (error) {
            console.error(error);
            toast.error('Producto no pudo ser actualizado.')
          });
    };
        
    const eliminarProducto = async() =>{
        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/productos/${producto._id}`,
            headers: {'Content-Type': 'application/json'},
            data:{...infoNuevoProducto, id:producto._id}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Producto eliminado exitosamente.')
            setConsultarTabla(true);
          }).catch(function (error) {
            console.error(error);
            toast.error('Error eliminando producto.')
          });
    }
    useEffect(() => {
        return  console.log(edit)
            
        } , [edit])
    return (
        <tr >
            {edit ?
                <>
                    <td>{producto.id}</td>
                    <td>
                        <input 
                            type="text"
                            defaultValue={producto.description}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, description: e.target.value })} />
                    </td>
                    <td>
                        <input 
                            type="text"
                            defaultValue={producto.price}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, price: e.target.value })} />
                    </td>
                    <td>
                        <select 
                            defaultValue={0} 
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, state: e.target.value })} 
                        >
                            <option disabled value={0}>Seleccione el estado</option>
                            <option >Disponible</option>
                            <option >No disponible</option>
                        </select>
                    </td>
                </>
                :
                <>
                    <td>{producto._id}</td>
                    <td>{producto.description}</td>
                    <td>{producto.price}</td>
                    <td>{producto.state}</td>
                </>
            }
            <td className='Products__table__icons'>
                {edit ? 
                    <FontAwesomeIcon 
                    onClick={() => {
                        actualizarProducto();
                        setEdit(!edit)
                        }
                            } className='Products__table__confirm-button' icon={faCheckSquare} />
                :
                    <FontAwesomeIcon 
                        onClick={() => setEdit(!edit) } className='Products__table__edit' icon={faEdit} />
                }
                <FontAwesomeIcon 
                    onClick={() => {
                        eliminarProducto();
                    }}
                className='Products__table__remove' icon={faTrash} />
            </td>
        </tr>
    )
}

export default Products;

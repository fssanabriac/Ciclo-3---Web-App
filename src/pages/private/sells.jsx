import React, {useEffect, useState} from 'react'
import { faCheckSquare, faEdit, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import { useRef } from 'react/cjs/react.development';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { getVentas } from 'utils/api';
import { getProductos } from 'utils/api';
import { getUsuarios } from 'utils/api';
import useIsActiveNavbar from 'hooks/useIsActiveNavbar';

const Sells = () => {
    const [verListaVentas, setVerListaVentas] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Registrar venta');
    const [ventas, setVentas] = useState([]);
    const [consultarBackEnd, setConsultarBackEnd] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
       getProductos(setProductos, setConsultarBackEnd);
       getUsuarios(setUsuarios, setConsultarBackEnd);
    }, [])

    useEffect( (e) => {
        if (verListaVentas) {
            setTextoBoton('Registrar venta');
        }else{
            setTextoBoton('Ver lista de ventas');
        }
    }, [verListaVentas]);

    useEffect(() => {
        if (consultarBackEnd){
            getVentas(setVentas, setConsultarBackEnd);
        }
    }, [consultarBackEnd])

    return (
        <div>
            <div className='Products__title'>
                {verListaVentas ? <h2>Lista de ventas</h2> : <h2>Registrar venta</h2> }

                <button className='Products__title__button' onClick={() => { setVerListaVentas(!verListaVentas) }}>
                    {textoBoton}
                </button>
            </div>
            <div className='abc'>
                {verListaVentas ? 
                    <MostrarVentas listaVentas={ventas} />
                : 
                    <AgregarVenta productos={productos} usuarios={usuarios}/>}
            </div>
            <ToastContainer position="bottom-right" autoClose={5000}/>
        </div>
    )
}

export default Sells

const MostrarVentas = ({listaVentas, setConsultarBackEnd}) =>{
    return <div className='Sells__container-table'>
        <table>
            <thead>
                <tr>
                    <th>Id Venta</th>
                    <th>Id Producto</th>
                    <th>Cantidad</th>
                    <th>Valor unidad</th>
                    <th>Valor Total</th>
                    <th>Fecha de venta</th>
                    <th>Nombre Comprador</th>
                    <th>Id Comprador</th>
                    <th>Nombre vendedor</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listaVentas.map((venta) => {
                    return <FilaVenta key={nanoid()} venta={venta} setConsultarBackEnd={setConsultarBackEnd} />
                })
                }
                
            </tbody>
        </table>
    </div>

}

const FilaVenta = ({venta, setConsultarBackEnd})=>{
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        idSale : venta.idSale,
        idProduct : venta.idProduct,
        quantity : venta.quantity,
        unitValue : venta.unitValue,
        totalValue : venta.totalValue,
        date : venta.date,
        idBuyer : venta.idBuyer,
        nameBuyer : venta.nameBuyer,
        nameSeller : venta.nameSeller
    });
    const [editVenta, setEditVenta] = useState(false);
    
    useEffect(() => {
        return console.log('Editando registro: ' + editVenta)
    }, [editVenta])


    const actualizarVenta = async () => {
        console.log('Actualizando Venta: ' + infoNuevaVenta);
        // enviar al BackEnd.

        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/ventas/${venta._id}`,
            headers: {'Content-Type': 'application/json'},
            data: {
                ...infoNuevaVenta,
                id : infoNuevaVenta._id,
                idSale : infoNuevaVenta.idSale,
                idProduct : infoNuevaVenta.idProduct,
                quantity : infoNuevaVenta.quantity,
                date : infoNuevaVenta.date,
                idBuyer : infoNuevaVenta.idBuyer,
                nameBuyer : infoNuevaVenta.nameBuyer,
                nameSeller : infoNuevaVenta.nameSeller
            }
            // data: {state: 'No Disponible', description: 'LIBRO 5', price: 20000}
          };
          
          await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Venta actualizada con exito.')
            setConsultarBackEnd(true);
          }).catch(function (error) {
            console.error(error);
            toast.error('Venta no pudo ser actualizada.')
          });
    };


    const eliminarVenta = async() =>{
        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/ventas/${venta._id}`,
            headers: {'Content-Type': 'application/json'},
            data:{...infoNuevaVenta, id: venta._id}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Venta eliminada exitosamente.')
            setConsultarBackEnd(true);
          }).catch(function (error) {
            console.error(error);
            toast.error('Error eliminando Venta.')
          });
    }

    return <tr>
        {editVenta ? 
            <>
                {/* <td>
                    <select 
                        defaultValue={0}
                        name="state" 
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, state: e.target.value })}
                    >
                        <option disabled value={0}>Seleccione un estado</option>
                        <option>En Proceso</option>
                        <option>Cancelada</option>
                        <option>Entregada</option>
                    </select>
                </td> */}
                <td>
                    {venta._id}
                </td>
                <td>
                    {venta.idProduct}
                </td>
                <td>
                    <input
                        type="number"
                        defaultValue={venta.quantity}
                        onChange={(e) => setInfoNuevaVenta({ setInfoNuevaVenta, quantity: e.target.value })} 
                    />
                </td>
                <td>
                    <input
                        type="number"
                        defaultValue={venta.unitValue}
                        onChange={(e) => setInfoNuevaVenta({ setInfoNuevaVenta, unitValue: e.target.value })} 
                    />
                </td>
                <td>{infoNuevaVenta.quantity * infoNuevaVenta.unitValue}</td>
                <td>
                    <input
                        type="date"
                        defaultValue={venta.date}
                        onChange={(e) => setInfoNuevaVenta({ setInfoNuevaVenta, date: e.target.value })} 
                    />
                </td>
                <td>{venta.idBuyer}</td>
                <td>
                    <select 
                        defaultValue={0}
                        name="nameBuyer" 
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nameBuyer: e.target.value })}
                    >
                        <option disabled value={0}>Seleccione un estado</option>
                        <option>En Proceso</option>
                        <option>Cancelada</option>
                        <option>Entregada</option>
                    </select>
                </td>
                <td>{venta.nameSeller}</td>
                <td className='Products__table__icons'>
                    <FontAwesomeIcon 
                        onClick={() => {
                            actualizarVenta();
                            setEditVenta(!editVenta)
                        }
                            } className='Products__table__confirm-button' 
                            icon={faCheckSquare} />
                    <FontAwesomeIcon
                        onClick={() => {
                            setEditVenta(!editVenta)
                        }} 
                        className='Products__table__cancel-edit' 
                        icon={faTimesCircle} 
                    />
            </td>
            </>
        :
            <>
                <td>{venta._id}</td>
                <td>{venta.idProduct}</td>
                <td>{venta.quantity}</td>
                <td>{venta.unitValue}</td>
                <td>{venta.totalValue}</td>
                <td>{venta.date}</td>
                <td>{venta.nameBuyer}</td>
                <td>{venta.idBuyer}</td>
                <td>{venta.nameSeller}</td>
                <td className='Products__table__icons'>
                    <FontAwesomeIcon
                        onClick={() => setEditVenta(!editVenta)} 
                        className='Products__table__edit' icon={faEdit} 
                    />
                    <FontAwesomeIcon 
                        onClick={() => {
                            eliminarVenta();
                        }} 
                        className='Products__table__remove' icon={faTrash}
                    />
                </td>
            </>
        }
    </tr>

}

const AgregarVenta = ({productos, usuarios}) =>{
    const tags =[
        {
            htmlForOption:"idSale",
            label: "Id de la venta",
            typeOption:"number",
            // disabled:true
            disabled:false
        },
        {
            htmlForOption:"idProduct",
            label:"Id del producto",
            typeOption:"number",
            // disabled:true
            disabled:false
        },
        {
            htmlForOption:"quantity",
            label:"Cantidad",
            typeOption:"number",
            disabled:false
        },
        {
            htmlForOption:"unitValue",
            label:"Valor unidad",
            typeOption:"number",
            disabled:false
        },
        {
            htmlForOption:"totalValue",
            label:"Valor total",
            typeOption:"number",
            disabled:false
        },
        {
            htmlForOption:"date",
            label:"Fecha de venta",
            typeOption:"date",
            disabled:false
        },
        {
            htmlForOption:"idBuyer",
            label:"Id del comprador",
            typeOption:"number",
            // disabled:true
            disabled:false
        },
        {
            htmlForOption:"nameBuyer",
            label:"Nombre del comprador",
            typeOption:"text",
            disabled:false
        },
        {
            htmlForOption:"nameSeller",
            label:"Nombre del vendedor",
            typeOption:"text",
            disabled:false
        },
    ]
    // const productos =[
    //     "Seleccione su libro", "Libro 1","Libro 2","Libro 3","Libro 4","Libro 5",
    //     "Libro 6","Libro 7","Libro 8","Libro 9","Libro 10"
    // ]
    const formSales = useRef(null);
    const submitSale = async (e) => {
       console.log('Submitting sale form') 

        e.preventDefault();
        const datosFormulario = new FormData(formSales.current)
        const nuevoSale = {}
        datosFormulario.forEach((value, key)=>{
            nuevoSale[key] = value
            console.log('\t Here: ' + nuevoSale)
        })

        const options = {
            method: 'POST',
            url: 'http://localhost:5000/ventas',
            headers: {'Content-Type': 'application/json'},
            data: {
                idSale: nuevoSale.idSale,
                idProduct: nuevoSale.idProduct,
                quantity:nuevoSale.quantity,
                unitValue:nuevoSale.unitValue,
                totalValue: nuevoSale.totalValue,
                date: nuevoSale.date,
                idBuyer: nuevoSale.idBuyer,
                nameBuyer: nuevoSale.nameBuyer,
                nameSeller: nuevoSale.nameSeller
            }
          };
          
        await axios.request(options).then(function (response) {
            console.log(response.data);
            // setConsultarBackEnd(true);
            toast.success('Venta creada exitosamente.');
            // setConsultarTabla(true);
        }).catch(function (error) {
            console.error(error);
            toast.error('No se pudo crear la venta.');
        });
    }

    return <div>
        <form 
            ref={formSales}
            onSubmit={submitSale}
            className='Products__form'
        >
            <label htmlFor="productName" className='Products__form__label'>
                Libro
                <select name="productName" defaultValue={0}>
                    <option disabled value={0} >Seleccione el Libro </option>
                    {productos.map((producto) => {
                            return <option key={nanoid()}>{producto.description}</option>
                    })}
                </select>
            </label>
            <label htmlFor="sellerName" className='Products__form__label'>
                Vendedor
                <select name="sellerName" defaultValue={0}>
                    <option disabled value={0} >Seleccione el vendedor </option>
                    {usuarios.map((usuario) => {
                            return <option key={nanoid()}>{usuario.name}</option>
                    })}
                </select>
            </label>
            {tags.map(
                (tag)=>{
                return <label className='Products__form__label' key={nanoid()} htmlFor={tag.htmlForOption}>
                    {tag.label}
                    <input disabled={tag.disabled} name={tag.htmlForOption} type={tag.typeOption} />
                </label>
                }
            )
            }
            <button className='Products__form__button' type="submit">Crear Venta</button>
        </form>
    </div>
}
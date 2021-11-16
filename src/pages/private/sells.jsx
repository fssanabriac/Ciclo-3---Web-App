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
        const fetchUsers = async()=>{
            await getUsuarios(
                (response)=>{
                    setUsuarios(response.data);
                },
                (error)=>{
                    console.error(error);
                }
            )
        };

        const fetchProducts = async ()=>{
            await getProductos(
                (response)=>{
                    setProductos(response.data);
                },
                (error)=>{
                    console.error(error);
                }
            )
        };

       fetchUsers();
       fetchProducts();
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
            getVentas(setVentas );
            setConsultarBackEnd(false);
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
                    <MostrarVentas listaVentas={ventas} usuarios={usuarios} productos={productos} setConsultarBackEnd={setConsultarBackEnd}/>
                : 
                    <AgregarVenta productos={productos} usuarios={usuarios}/>}
            </div>
            <ToastContainer position="bottom-right" autoClose={5000}/>
        </div>
    )
}

export default Sells

const MostrarVentas = ({listaVentas,usuarios,productos, setConsultarBackEnd}) =>{
    const [busqueda, setBusqueda] = useState('');
    return <div className='Sells__container-table'>
        <div className='buscador_ventas'>
            <select name="buscar_por" className='drop_down_buscar'>
                <option value="Id Venta">Id Venta</option>
                <option value="Id Comprador">Id Comprador</option>
                <option value="Nombre Comprador">Nombre Comprador</option>
            </select>
            <input 
                placeholder='Buscar'
                className='buscar'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
        </div>
        
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
                    return <FilaVenta key={nanoid()} venta={venta} usuarios={usuarios} productos={productos} setConsultarBackEnd={setConsultarBackEnd} />
                })
                }
                
            </tbody>
        </table>
    </div>

}

const FilaVenta = ({venta, usuarios, productos, setConsultarBackEnd})=>{
    const [editVenta, setEditVenta] = useState(false);

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
          
          await axios.request(options).then((response)=> {
            console.log(response.data);
            toast.success('Venta actualizada con exito.')
            setConsultarBackEnd(true);
          }).catch((error)=> {
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
                    <select name="idProduct" defaultValue={0}>
                        <option value={0}>Seleccione un libro</option>
                        {productos.map((p)=>{
                            return <option key={nanoid()}>{p.description}</option>
                        })}
                    </select>
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
                <td>
                    <input type="text" name='quantity' defaultValue={infoNuevaVenta.quantity * infoNuevaVenta.unitValue}/></td>
                <td>
                    <input
                        type="date"
                        defaultValue={venta.date}
                        onChange={(e) => setInfoNuevaVenta({ setInfoNuevaVenta, date: e.target.value })} 
                    />
                </td>
                <td>{venta.idBuyer}</td>
                <td>
                    {venta.nameSeller}
                </td>
                <td>
                    <select 
                        defaultValue={0}
                        name="nameSeller" 
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nameSeller: e.target.value })}
                    >
                        <option disabled value={0}>Seleccione un vendedor</option>
                        {usuarios.map((u)=>{
                            return <option key={nanoid()}>{u.name}</option>
                        })
                        }
                       
                    </select>
                </td>
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
        // {
        //     htmlForOption:"idSale",
        //     label: "Id de la venta",
        //     typeOption:"number",
        //     disabled:true
        // },
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
        }
    ]

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
                idSale: nuevoSale._id,
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
                <select name="productName" defaultValue={-1}>
                    <option disabled value={-1} >Seleccione el Libro </option>
                    {productos.map((producto) => {
                            return <option key={nanoid()}>{producto.description}</option>
                    })}
                </select>
            </label> 
            <label htmlFor="nameSeller" className='Products__form__label'>
                Vendedor
                <select name="nameSeller" defaultValue={0}>
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
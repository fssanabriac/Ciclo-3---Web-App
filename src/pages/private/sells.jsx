import React, {useEffect, useState} from 'react'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import { useRef } from 'react/cjs/react.development';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Sells = () => {
    const [verListaVentas, setVerListaVentas] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Registrar venta');
    const ventas = [
        {
            idVenta:"1",
            valorTotal:"20000",
            idProducto:"1",
            cantidad:"4",
            valorUnidad:"5",
            fecha:"10/10/2021",
            idComprador:"123",
            nombreComprador:"John Doe",
            nombreVendedor:"Homer Simpson",
        },
        {
            idVenta:"2",
            valorTotal:"20000",
            idProducto:"1",
            cantidad:"4",
            valorUnidad:"5",
            fecha:"10/10/2021",
            idComprador:"123",
            nombreComprador:"John Doe",
            nombreVendedor:"Homer Simpson",
        },
        {
            idVenta:"3",
            valorTotal:"20000",
            idProducto:"1",
            cantidad:"4",
            valorUnidad:"5",
            fecha:"10/10/2021",
            idComprador:"123",
            nombreComprador:"John Doe",
            nombreVendedor:"Homer Simpson",
        }
    ]

    useEffect( (e) => {
        if (verListaVentas) {
            setTextoBoton('Registrar venta');
        }else{
            setTextoBoton('Ver lista de ventas');
        }
    }, [verListaVentas]);

    return (
        <div>
            <div className='Products__title'>
                {verListaVentas ? <h2>Lista de ventas</h2> : <h2>Registrar venta</h2> }

                <button className='Products__title__button' onClick={() => { setVerListaVentas(!verListaVentas) }}>
                    {textoBoton}
                </button>
            </div>
            <div className='abc'>
                {verListaVentas ? <MostrarVentas listaVentas={ventas} /> : <AgregarVenta />}
            </div>
            <ToastContainer position="bottom-right" autoClose={5000}/>
        </div>
    )
}

export default Sells

const MostrarVentas = ({listaVentas}) =>{
    return <div className='Sells__container-table'>
        <table>
            <thead>
                <tr>
                    <th>Id Venta</th>
                    <th>Valor Total</th>
                    <th>Id Producto</th>
                    <th>Cantidad</th>
                    <th>Valor unidad</th>
                    <th>Fecha de venta</th>
                    <th>Id Comprador</th>
                    <th>Nombre Comprador</th>
                    <th>Nombre vendedor</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listaVentas.map((venta)=> {
                    return <tr key={nanoid()}>
                        <td>{venta.idVenta}</td>
                        <td>{venta.valorTotal}</td>
                        <td>{venta.idProducto}</td>
                        <td>{venta.cantidad}</td>
                        <td>{venta.valorTotal}</td>
                        <td>{venta.fecha}</td>
                        <td>{venta.idComprador}</td>
                        <td>{venta.nombreComprador}</td>
                        <td>{venta.nombreVendedor}</td>
                        <td className='Products__table__icons'>
                            <FontAwesomeIcon className='Products__table__edit'icon={faEdit}/>
                            <FontAwesomeIcon className='Products__table__remove' icon={faTrash}/>
                        </td>
                    </tr>
                }
                )}
            </tbody>
        </table>
    </div>

}

const AgregarVenta = () =>{
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
    const productos =[
        "Seleccione su libro", "Libro 1","Libro 2","Libro 3","Libro 4","Libro 5",
        "Libro 6","Libro 7","Libro 8","Libro 9","Libro 10"
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
                    {productos.map((producto) => {
                        if (producto==="Seleccione su libro"){
                            return <option disabled value={0} key={nanoid()} >{producto}</option> 
                        }else{
                            return <option key={nanoid()}>{producto}</option>
                        }
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
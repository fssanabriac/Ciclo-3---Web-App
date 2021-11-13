import React, {useEffect, useState} from 'react'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';

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
                {verListaVentas ? <MostrarVentas listaVentas={ventas} /> : <ModificarVentas />}
            </div>
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
                    return <tr key={venta.idVenta}>
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

const ModificarVentas = () =>{
    const tags =[
        {
            htmlForOption:"sellId",
            label: "Id de la venta",
            typeOption:"number"
        },
        {
            htmlForOption:"productId",
            label:"Id del producto",
            typeOption:"number"
        },
        {
            htmlForOption:"quantity",
            label:"Cantidad",
            typeOption:"number"
        },
        {
            htmlForOption:"unitPrice",
            label:"Valor unidad",
            typeOption:"number"
        },
        {
            htmlForOption:"total",
            label:"Valor total",
            typeOption:"number"
        },
        {
            htmlForOption:"sellDate",
            label:"Fecha de venta",
            typeOption:"date"
        },
        {
            htmlForOption:"idBuyer",
            label:"Id del comprador",
            typeOption:"number"
        },
        {
            htmlForOption:"nameBuyer",
            label:"Nombre del comprador",
            typeOption:"text"
        },
        {
            htmlForOption:"nameSeller",
            label:"Nombre del vendedor",
            typeOption:"text"
        },
    ]
    const productos =[
        "Seleccione su producto", "Libro 1","Libro 2","Libro 3","Libro 4","Libro 5",
        "Libro 6","Libro 7","Libro 8","Libro 9","Libro 10"
    ]

    return <div>
        <form className='Products__form'>
            <label htmlFor="productName" className='Products__form__label'>
                Libro
                <select name="productName" defaultValue={0}>
                    {productos.map((producto) => {
                        if (producto==="Seleccione su producto"){
                            return <option disabled key={nanoid} value={0}>{producto}</option> 
                        }else{
                            return <option key={producto}>{producto}</option>
                        }
                    })}
                </select>
            </label>
            {tags.map(
                (tag)=>{
                return <label className='Products__form__label' key={nanoid} htmlFor={tag.htmlForOption}>
                    {tag.label}
                    <input name={tag.htmlForOption} type={tag.typeOption} />
                </label>
                }
            )
            }
            <button className='Products__form__button' type="submit">Crear Venta</button>
        </form>
    </div>
}
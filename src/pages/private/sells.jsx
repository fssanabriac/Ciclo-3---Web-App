import React, {useEffect, useState} from 'react'

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
            <h2> This is the sells Page </h2>
            <button onClick={() => {setVerListaVentas(!verListaVentas)}}>
                {textoBoton}
            </button>
            { verListaVentas ? <MostrarVentas listaVentas={ventas}/> : <ModificarVentas/>}
        </div>
    )
}

export default Sells

const MostrarVentas = ({listaVentas}) =>{
    return <div>
        Esta es la lista de ventas
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
            key:1,
            htmlForOption:"sellId",
            label: "Id de la venta",
            typeOption:"number"
        },
        {
            key:2,
            htmlForOption:"total",
            label:"valor total",
            typeOption:"number"
        },
        {
            key:3,
            htmlForOption:"productId",
            label:"Id del producto",
            typeOption:"number"
        },
        {
            key:4,
            htmlForOption:"quantity",
            label:"Cantidad",
            typeOption:"number"
        },
        {
            key:5,
            htmlForOption:"unitPrice",
            label:"Valor unidad",
            typeOption:"number"
        },
        {
            key:6,
            htmlForOption:"sellDate",
            label:"Fecha de venta",
            typeOption:"date"
        },
        {
            key:7,
            htmlForOption:"idBuyer",
            label:"Id del comprador",
            typeOption:"number"
        },
        {
            key:8,
            htmlForOption:"nameBuyer",
            label:"Nombre del comprador",
            typeOption:"text"
        },
        {
            key:9,
            htmlForOption:"nameSeller",
            label:"Nombre del vendedor",
            typeOption:"text"
        },
    ]
    const productos =[
        "Seleccione su producto", "Producto 1","Producto 2","Producto 3","Producto 4","Producto 5",
        "Producto 6","Producto 7","Producto 8","Producto 9","Producto 10"
    ]

    return <div>Aquí se crea o modifica una venta
        <form >
            <label htmlFor="productName">
                <select name="productName" >
                    {productos.map((producto) => {
                        if (producto==="Seleccione su producto"){
                            return <option disabled key={producto}>{producto}</option> 
                        }else{
                            return <option key={producto}>{producto}</option>
                        }
                    })}
                </select>
            </label>
            {tags.map(
                (tag)=>{
                return <label key={tag.key} htmlFor={tag.htmlForOption}>
                    {tag.label}
                    <input name={tag.htmlForOption} type={tag.typeOption} />
                </label>
                }
            )
            }
            <button type="submit">Crear Venta</button>
        </form>
    </div>
}
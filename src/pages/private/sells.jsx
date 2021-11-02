import React, {useEffect, useState} from 'react'

const Sells = () => {
    const [verListaVentas, setVerListaVentas] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Registrar venta');

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
            { verListaVentas ? <MostrarVentas/> : <ModificarVentas/>}
        </div>
    )
}

export default Sells

const MostrarVentas = () =>{
    return <div>Esta es la lista de ventas</div> 
}

const ModificarVentas = () =>{
    return <div>Aquí se crea o modifica una venta
        <ul>
            <li>Identificador Venta</li>
            <li>Valor total</li>
            <li>identificador producto</li>
            <li>Cantidad Producto</li>
            <li>Precio Unitario</li>
            <li>Fecha venta</li>
            <li>Documento id cliente</li>
            <li>Nombre Cliente</li>
            <li>Vendedor</li>
        </ul>
    </div>
}
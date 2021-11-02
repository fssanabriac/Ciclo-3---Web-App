import React, {useEffect, useState} from 'react'

const Users = () => {
    const [verListaUsuarios, setVerListaUsuarios] = useState(true);
    const [textoBotonUsuarios, setTextoBotonUsuarios] = useState('Actualizar rol de usuario')

    useEffect(() =>{
        if(verListaUsuarios){
            setTextoBotonUsuarios('Actualizar rol de usuario');
        }else{
            setTextoBotonUsuarios('Ver lista de usuarios');
        }
    },[verListaUsuarios]);
    return (
        <div>
           <h2>Esta es la pagina de administracion de usuarios</h2> 
           <button onClick={(e) => {setVerListaUsuarios(!verListaUsuarios)}}>{textoBotonUsuarios}</button>
           {!verListaUsuarios ? <ActualizarRol/> : <ListaUsuarios/>}
        </div>
    )
}

const ListaUsuarios = () => {
    return <div><h3>Lista de Usuarios</h3></div>
}

const ActualizarRol = () => {
    return <div>Actualizar usuario
        <ul>
            <li>Rol (Admin o vendedor)</li>
            <li>Estado (pendiente, autorizado, no autorizado)</li>
        </ul>
    </div>
}

export default Users

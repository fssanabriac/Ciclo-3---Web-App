import React, {useEffect, useState} from 'react'

const Users = () => {
    const usuarios = [
        {
            nombre:"Homer",
            id:1,
            rol:"Administrador",
            estado:"Autorizado"
        },
        {
            nombre:"Bart",
            id:2,
            rol:"Vendedor",
            estado:"Pendiente"
        },
        {
            nombre:"Marge",
            id:3,
            rol:"Administrador",
            estado:"Autorizado"
        },
        {
            nombre:"Lisa",
            id:4,
            rol:"Vendedor",
            estado:"No Autorizado"
        },
        {
            nombre:"Maggie",
            id:5,
            rol:"Administrador",
            estado:"Pendiente"
        },
    ]
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
           <button onClick={(e) => {setVerListaUsuarios(!verListaUsuarios)}}>{textoBotonUsuarios}</button>
           {!verListaUsuarios ? <ActualizarRol/> : <ListaUsuarios listaUsuarios={usuarios}/>}
        </div>
    )
}

const ListaUsuarios = ({listaUsuarios}) => {
    return <div className='flex-col-j-a-center'>
        <h3>Lista de Usuarios</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Identificación</th>
                    <th>Rol</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {listaUsuarios.map((usuario)=>{
                    return <tr key={usuario.id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.id}</td>
                        <td>{usuario.rol}</td>
                        <td>{usuario.estado}</td>
                    </tr>
                })}

            </tbody>
        </table>
        </div>
}

const ActualizarRol = () => {
    const usersTagAttributes = [
        {
            key: 0,
            htmlForOption: "nombreUsuario",
            label:"Nombre",
            typeOption: "text",
        },
        {
            key: -1,
            htmlForOption: "idUsusario",
            label:"Identificación",
            typeOption: "text",
        },
        {
            key: 1,
            htmlForOption: "rol",
            label:"Rol",
            typeOption: "text",
        },
        {
            key: 2,
            htmlForOption: "estado",
            label:"Estado",
            typeOption: "text",
        },
    ]
    return <div>Actualizar usuario
        <form className='flex-col-j-a-center'>
            {usersTagAttributes.map((tag)=>{
                return <label key={tag.key} htmlFor={tag.htmlForOption}>
                    {tag.label}
                    <input name={tag.htmlForOption} type={tag.typeOption} />
                </label>
            })}
            <button type="submit">Actualizar usuario</button>
        </form>
    </div>
}

export default Users

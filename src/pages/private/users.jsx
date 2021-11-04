import React, {useEffect, useState} from 'react'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <div className='Products__title'> {/* Contenedor de titulo y boton que cambia estado de tabla*/}
                {verListaUsuarios ? <h2>Lista de Usuarios</h2> : <h2>Actualizar rol de usuario</h2> }
                <button className='Products__title__button' onClick={(e) => { setVerListaUsuarios(!verListaUsuarios) }}>{textoBotonUsuarios}</button>
            </div>
            <div className='abc'>
                {!verListaUsuarios ? <ActualizarRol /> : <ListaUsuarios listaUsuarios={usuarios} />}
            </div>
        </div>
    )
}

const ListaUsuarios = ({listaUsuarios}) => {
    return <div className='Products__container-table'>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Identificación</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listaUsuarios.map((usuario)=>{
                    return <tr key={usuario.id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.id}</td>
                        <td>{usuario.rol}</td>
                        <td>{usuario.estado}</td>
                        <td className='Products__table__icons'>
                            <FontAwesomeIcon className='Products__table__edit'icon={faEdit}/>
                            <FontAwesomeIcon className='Products__table__remove' icon={faTrash}/>
                        </td>
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
    return <div>
        <form className='Products__form'>
            {usersTagAttributes.map((tag)=>{
                return <label className='Products__form__label' key={tag.key} htmlFor={tag.htmlForOption}>
                    {tag.label}
                    <input name={tag.htmlForOption} type={tag.typeOption} />
                </label>
            })}
            <button className='Products__form__button' type="submit">Actualizar usuario</button>
        </form>
    </div>
}

export default Users

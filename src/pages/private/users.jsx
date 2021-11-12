import React, {useEffect, useState, useRef} from 'react'
import { faCheckSquare, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { toast } from 'react-toastify';

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
    const [editUser, setEditUser] = useState(false);

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
                            {editUser ?
                                <FontAwesomeIcon
                                    onClick={() => {
                                        // actualizarUser();
                                        setEditUser(!editUser)
                                    }
                            } className='Products__table__confirm-button' icon={faCheckSquare} />
                                :
                                <FontAwesomeIcon
                                    onClick={() => setEditUser(!editUser)} className='Products__table__edit' icon={faEdit} />
                            }
                            <FontAwesomeIcon className='Products__table__remove' icon={faTrash} />
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
            htmlForOption: "name",
            label:"Nombre",
            typeOption: "text",
        },
        {
            htmlForOption: "idNumber",
            label:"Identificación",
            typeOption: "text",
        }
    ]

    const formUser = useRef(null);
    const submitUser = async (e) =>{
       console.log('Submitting user form') 

        e.preventDefault();
        const datosFormulario = new FormData(formUser.current)
        const nuevoUser = {}
        datosFormulario.forEach((value, key)=>{
            nuevoUser[key] = value
            console.log('\t Here: ' + nuevoUser)
        })

        const options = {
            method: 'POST',
            url: 'http://localhost:5000/usuarios',
            headers: {'Content-Type': 'application/json'},
            data: {
                name: nuevoUser.name,
                idNumber: nuevoUser.idNumber,
                role:nuevoUser.role,
                status:nuevoUser.status,
            }
          };
          
        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Usuario creado exitosamente.');
            // setConsultarTabla(true);
        }).catch(function (error) {
            console.error(error);
            toast.error('No se pudo crear el producto.');
        });
    }

    return <div>
        <form className='Products__form' ref={formUser} onSubmit={submitUser}>
            {usersTagAttributes.map((tag)=>{
                return <label className='Products__form__label' key={nanoid()} htmlFor={tag.htmlForOption}>
                    {tag.label}
                    <input name={tag.htmlForOption} type={tag.typeOption} />
                </label>
            })}
            <label className='Products__form__label' htmlFor="rol">
                Rol
                <select defaultValue={0} name="role" >
                    <option disabled value={0}>Seleccione un rol</option>
                    <option>Administrador</option>
                    <option>Vendedor</option>
                </select>
            </label>
            <label className='Products__form__label' htmlFor="estado">
                Estado
                <select defaultValue={0} name="status" >
                    <option disabled value={0}>Seleccione un estado</option>
                    <option>Pendiente</option>
                    <option>No Autorizado</option>
                    <option>Autorizado</option>
                </select>
            </label>
            <button className='Products__form__button' type="submit">Actualizar usuario</button>
        </form>
    </div>
}

export default Users

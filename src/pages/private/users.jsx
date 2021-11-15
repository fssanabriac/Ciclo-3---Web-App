import React, {useEffect, useState, useRef} from 'react'
import { faCheckSquare, faEdit, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { getUsuarios } from 'utils/api';
import { postUsuario } from 'utils/api';

const Users = () => {
    const [verListaUsuarios, setVerListaUsuarios] = useState(true);
    const [textoBotonUsuarios, setTextoBotonUsuarios] = useState('Actualizar rol de usuario')
    const [usuarios, setUsuarios] = useState([]);
    const [consultarBackEnd, setConsultarBackEnd] = useState(true);

    useEffect(() =>{

        if(verListaUsuarios){
            setTextoBotonUsuarios('Crear de usuario');
        }else{
            setTextoBotonUsuarios('Ver lista de usuarios');
            setConsultarBackEnd(true);
        }

    },[verListaUsuarios]);

    useEffect(() => {
        if (consultarBackEnd){
            getUsuarios(setUsuarios, setConsultarBackEnd);
        }
    }, [consultarBackEnd])

    return (
        <div>
            <div className='Products__title'> {/* Contenedor de titulo y boton que cambia estado de tabla*/}
                {verListaUsuarios ? <h2>Lista de Usuarios</h2> : <h2>Actualizar rol de usuario</h2> }
                <button className='Products__title__button' onClick={(e) => { setVerListaUsuarios(!verListaUsuarios) }}>{textoBotonUsuarios}</button>
            </div>
            <div className='abc'>
                {!verListaUsuarios ? 
                    <ActualizarRol setConsultarBackEnd={setConsultarBackEnd} />
                :
                    <ListaUsuarios usuariosBackEnd={usuarios} setConsultarBackEnd={setConsultarBackEnd} />}
            </div>
            <ToastContainer position="bottom-right" autoClose={5000}/>
        </div>
    )
}

const ListaUsuarios = ({usuariosBackEnd, setConsultarBackEnd}) => {
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
                    {usuariosBackEnd.map((usuario) => {
                        return <FilaUsuario key={nanoid()} usuario={usuario} setConsultarBackEnd={setConsultarBackEnd}/>
                    })
                    }
            </tbody>
        </table>
        </div>
}

const FilaUsuario = ({usuario, setConsultarBackEnd})=>{
    const [infoNuevoUsuario,setInfoNuevoUsuario] = useState({
        name : usuario.name,
        idNumber : usuario.idNumber,
        role : usuario.role,
        status : usuario.status
    });
    const [editUser, setEditUser] = useState(false);
    
    useEffect(() => {
        return console.log('Editando registro: ' + editUser)
    }, [editUser])


    const actualizarUsuario = async () => {
        console.log(infoNuevoUsuario);
        // enviar al BackEnd.

        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/usuarios/${usuario._id}`,
            headers: {'Content-Type': 'application/json'},
            data: {
                ...infoNuevoUsuario,
                id : infoNuevoUsuario._id,
                name : infoNuevoUsuario.name,
                idNumber : infoNuevoUsuario.idNumber,
                role : infoNuevoUsuario.role,
                status : infoNuevoUsuario.status
            }
            // data: {state: 'No Disponible', description: 'LIBRO 5', price: 20000}
          };
          
          await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Usuario actualizado con exito.')
            setConsultarBackEnd(true);
          }).catch(function (error) {
            console.error(error);
            toast.error('Usuario no pudo ser actualizado.')
          });
    };


    const eliminarUsuario = async() =>{
        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/usuarios/${usuario._id}`,
            headers: {'Content-Type': 'application/json'},
            data:{...infoNuevoUsuario, id: usuario._id}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Usuario eliminado exitosamente.')
            setConsultarBackEnd(true);
          }).catch(function (error) {
            console.error(error);
            toast.error('Error eliminando Usuario.')
          });
    }

    return <tr>
        {editUser ? 
            <>
                <td>
                    <input
                        type="text"
                        defaultValue={usuario.nombre}
                        onChange={(e) => setInfoNuevoUsuario({ setInfoNuevoUsuario, name: e.target.value })} 
                    />
                </td>
                <td>
                    <input
                        type="text"
                        defaultValue={usuario.id}
                        onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, idNumber: e.target.value })} 
                    />
                </td>
                <td>
                    <select 
                        defaultValue={0}
                        name="role" 
                        onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, role: e.target.value })}
                    >
                        <option disabled value={0}>Seleccione un rol</option>
                        <option>Administrador</option>
                        <option>Vendedor</option>
                    </select>
                </td>
                <td>
                    <select 
                        defaultValue={0} 
                        name="status"
                        onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, status: e.target.value })}
                    >
                        <option disabled value={0}>Seleccione un estado</option>
                        <option>Pendiente</option>
                        <option>No Autorizado</option>
                        <option>Autorizado</option>
                    </select>
                </td>
                <td className='Products__table__icons'>
                    <FontAwesomeIcon 
                        onClick={() => {
                            actualizarUsuario();
                            setEditUser(!editUser)
                        }
                            } className='Products__table__confirm-button' icon={faCheckSquare} />
                    <FontAwesomeIcon
                        onClick={() => {
                            setEditUser(!editUser)
                        }} 
                        className='Products__table__cancel-edit' icon={faTimesCircle} 
                    />
            </td>
            </>
        :
            <>
                <td>{usuario.name}</td>
                <td>{usuario.idNumber}</td>
                <td>{usuario.role}</td>
                <td>{usuario.status}</td>
                <td className='Products__table__icons'>
                    <FontAwesomeIcon
                        onClick={() => setEditUser(!editUser)} 
                        className='Products__table__edit' icon={faEdit} 
                    />
                    <FontAwesomeIcon 
                        onClick={() => {
                            eliminarUsuario();
                        }} 
                        className='Products__table__remove' icon={faTrash}
                    />
                </td>
            </>
        }
    </tr>

}

const ActualizarRol = ({setConsultarBackEnd}) => {
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

        postUsuario(nuevoUser,setConsultarBackEnd);
        // const options = {
        //     method: 'POST',
        //     url: 'http://localhost:5000/usuarios',
        //     headers: {'Content-Type': 'application/json'},
        //     data: {
        //         name: nuevoUser.name,
        //         idNumber: nuevoUser.idNumber,
        //         role:nuevoUser.role,
        //         status:nuevoUser.status,
        //     }
        //   };
          
        // await axios.request(options).then(function (response) {
        //     console.log(response.data);
        //     setConsultarBackEnd(true);
        //     toast.success('Usuario creado exitosamente.');
        //     // setConsultarTabla(true);
        // }).catch(function (error) {
        //     console.error(error);
        //     toast.error('No se pudo crear el producto.');
        // });
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

import axios from "axios";
import { toast } from "react-toastify";

export const getProductos = async (succesCallback, errorCallback) =>{
    const options = { method: 'GET', url: 'http://localhost:5000/productos' };

    await axios
        .request(options)
        .then(succesCallback)
        .catch(errorCallback);
};

export const postProducto = (data, succesCallback, errorCallback) =>{
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos',
        headers: { 'Content-Type': 'application/json' },
        data
    };

    axios.request(options).then( succesCallback).catch(errorCallback);

};

export const editarProducto = async (id, data, succesCallback, errorCallback)=>{
    const options = {
            method: 'PATCH',
            url: `http://localhost:5000/productos/${id}`,
            headers: {'Content-Type': 'application/json'},
            data
        }

    await axios.request(options).then( succesCallback).catch(errorCallback);
}

export const eliminarProducto = async (id, succesCallback, errorCallback)=>{
    const options = {
            method: 'DELETE',
            url: `http://localhost:5000/productos/${id}/`,
            headers: {'Content-Type': 'application/json'},
            // data{...infoNuevoProducto, id:producto._id}
          };

    await axios.request(options).then( succesCallback).catch(errorCallback);
}
export const getUsuarios = async (setUsuarios) =>{
    const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setUsuarios(response.data)
        }).catch(function (error) {
            console.error(error);
        });
}

export const postUsuario = async (nuevoUser,setConsultarBackEnd) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/usuarios',
        headers: { 'Content-Type': 'application/json' },
        data: {
            name: nuevoUser.name,
            idNumber: nuevoUser.idNumber,
            role: nuevoUser.role,
            status: nuevoUser.status,
        }
    };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setConsultarBackEnd(true);
            toast.success('Usuario creado exitosamente.');
        // setConsultarTabla(true);
        })
        .catch(function (error) {
            console.error(error);
            toast.error('No se pudo crear el producto.');
        });
};

export const getVentas = async (setVentas) =>{
    const options = { method: 'GET', url: 'http://localhost:5000/ventas' };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setVentas(response.data)
        }).catch(function (error) {
            console.error(error);
        });
};
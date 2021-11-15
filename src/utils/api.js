import axios from "axios";
import { toast } from "react-toastify";

export const getProductos = async (successCallback, errorCallback) =>{
    const options = { method: 'GET', url: 'http://localhost:5000/productos' };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

export const postProducto = (data, successCallback, errorCallback) =>{
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos',
        headers: { 'Content-Type': 'application/json' },
        data
    };

    axios.request(options).then( successCallback).catch(errorCallback);

};

export const editarProducto = async (id, data, successCallback, errorCallback)=>{
    const options = {
            method: 'PATCH',
            url: `http://localhost:5000/productos/${id}`,
            headers: {'Content-Type': 'application/json'},
            data
        }

    await axios.request(options).then( successCallback).catch(errorCallback);
}

export const eliminarProducto = async (id, successCallback, errorCallback)=>{
    const options = {
            method: 'DELETE',
            url: `http://localhost:5000/productos/${id}/`,
            headers: {'Content-Type': 'application/json'},
            // data{...infoNuevoProducto, id:producto._id}
          };

    await axios.request(options).then( successCallback).catch(errorCallback);
}

export const getUsuarios = async (successCallback, errorCallback) =>{
    const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };

    await axios
        .request(options)
        .then(successCallback ).catch(errorCallback
        );
}

export const postUsuario = async (data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/usuarios',
        headers: { 'Content-Type': 'application/json' },
        data
    };

    await axios .request(options) .then(successCallback) .catch(errorCallback);
};

export const patchUsuario = async (id,data, successCallback, errorCallback)=>{
    const options ={
            method: 'PATCH',
            url: `http://localhost:5000/usuarios/${id}`,
            headers: {'Content-Type': 'application/json'},
            data
    }

    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteUsuario = async (id, successCallback, errorCallback)=>{
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/usuarios/${id}`,
        headers: { 'Content-Type': 'application/json' },
        // data: { ...infoNuevoUsuario, id: usuario._id }
    }

    await axios.request(options).then(successCallback).catch(errorCallback);
}

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
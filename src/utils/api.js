import axios from "axios";
import { toast } from "react-toastify";

export const getProductos = async (setProductos, setConsultarTabla) =>{
    const options = { method: 'GET', url: 'http://localhost:5000/productos' };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setProductos(response.data)
        })
        .catch(function (error) {
            console.error(error);
        });
    setConsultarTabla(false);
};

export const postProducto = async (nuevoProducto, setConsultarTabla) =>{
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos',
        headers: { 'Content-Type': 'application/json' },
        data: {
            description: nuevoProducto.description,
            state: nuevoProducto.state,
            price: nuevoProducto.price
        }
    };

    await axios.request(options).then(function (response) {
        console.log(response.data);
        toast.success('Producto creado exitosamente.');
        setConsultarTabla(true);
    }).catch(function (error) {
        console.error(error);
        toast.error('No se pudo crear el producto.');
    });

};

export const getUsuarios = async (setUsuarios, setConsultarBackEnd) =>{
    const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setUsuarios(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    setConsultarBackEnd(false);
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

export const getVentas = async (setVentas, setConsultarBackEnd) =>{
    const options = { method: 'GET', url: 'http://localhost:5000/ventas' };

    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setVentas(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    setConsultarBackEnd(false);
};
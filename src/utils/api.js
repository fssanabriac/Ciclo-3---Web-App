import axios from "axios";

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
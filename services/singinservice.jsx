import axios from 'axios';

export const findUserByEmailAndPassword = async (email, password) => {
    try {
        const response = await axios.get('http://localhost:8090/api/users/findUser', {
            params: {
                email_user: email,
                password_user: password
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            // La solicitud fue realizada y el servidor respondió con un código de estado
            // que no está en el rango de 2xx
            console.error('Error en la respuesta del servidor:', error.response.data);
            console.error('Código de estado:', error.response.status);
        } else if (error.request) {
            // La solicitud fue realizada pero no se recibió respuesta
            console.error('No se recibió respuesta del servidor:', error.request);
        } else {
            // Algo ocurrió al configurar la solicitud
            console.error('Error al configurar la solicitud:', error.message);
        }
        throw error;
    }
}


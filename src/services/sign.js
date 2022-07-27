import api, {apiSetHeader} from './api.services'

export const authorize = async (username, password) => {
    try {
        const {data} = await api.post('/clients/token/', {
            username,
            password
        });

        localStorage.setItem('jwt', data.access);
        apiSetHeader('Authorization', `Bearer ${data.access}`);
    } catch (error) {
        console.log(error);
    }
};
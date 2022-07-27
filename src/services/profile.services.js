import {axios} from "axios";
import {API_APP} from "../VARIABLES";


export const profileServices = async (token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    await axios.post(`${API_APP}/me`, {headers})
}
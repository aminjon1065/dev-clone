import {axios} from "axios";
import {API_APP} from "../VARIABLES";

const JWTToken = localStorage.getItem("__token");

const api = axios.create({
    baseURL: `${API_APP}`
})

function apiSetHeader(name, value) {
    if (value) {
        api.defaults.headers[name] = value;
    }
}

if (JWTToken) {
   apiSetHeader('Authorization', `Bearer ${JWTToken}`);
}
api.interceptors.request.use
(
    config => {
        if (!config.defaults.headers['Authorization']) {
            window.location('/');
            return config;
        }
    }, error => {
        return Promise.reject(error);
    }
)

export default api;

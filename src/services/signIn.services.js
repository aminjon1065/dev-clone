import axios from "axios";
import {API_APP} from "./../VARIABLES";

export const SignInServices = async (credentials) => await axios
    .post(`${API_APP}/login`, credentials)
    .then((res) => {
        return res;
    })
    .catch((err) => {
        throw new Error(err.response.data.message);
    });

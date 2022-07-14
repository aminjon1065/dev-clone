import axios from "axios";
import {API_APP} from "../../VARIABLES";

const token = localStorage.getItem("__token");
export default axios.create({
    baseURL: `${API_APP}`,
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    }
});
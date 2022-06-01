import axios from "axios";
import { API_APP } from "./../VARIABLES";

export const SignUpService = async (credentials) => {
  await axios
    .post(`${API_APP}/register`, credentials)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

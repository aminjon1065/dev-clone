import { API_APP } from "../VARIABLES";
import { axios } from "axios";

export const getMessages = async () => {
  const token = localStorage.getItem("__token");
  await axios
    .get(`${API_APP}/inbox`, { headers: { Authorization: `Bearer ${token}` } })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

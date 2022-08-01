import axiosWithInterceptor from "../utils/http/axios";


const getUsersList = async () => {
    await axiosWithInterceptor
        .get(`users-list`)
        .then((response) => {
            return response
        })
        .then((error) => {
            return error
        })
}

export  default getUsersList;
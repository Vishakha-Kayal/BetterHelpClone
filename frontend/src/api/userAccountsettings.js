import axios from "axios"
import { url } from "../App"

export const updateEmail = async ({ userId, formattedUserType, email }) => {
    const data = {
        userId,
        userType: formattedUserType,
        email
    }
    const response = await axios.post(`${url}/api/userAccount/email`, data)
    return response
}
export const updatePassword = async ({ userId, formattedUserType, password }) => {
    const data = {
        userId,
        userType: formattedUserType,
        password
    }
    const response = await axios.post(`${url}/api/userAccount/email`, data)
    return response
}
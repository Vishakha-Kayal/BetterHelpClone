import axios from "axios"
import {url} from "../App"
const getAllUsers = async () => {
    const response = await axios.get(`${url}/api/users/`)
    return response
}

export { getAllUsers }
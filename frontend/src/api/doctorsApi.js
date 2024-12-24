import axios from "axios"
import { url } from "../App"

export const getDoctors = async () => {
    return await axios.get(`${url}/api/doctors`);
}
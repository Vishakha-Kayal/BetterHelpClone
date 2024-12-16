import { url } from "../App"
import axios  from "axios"

export const createOrder = async ({ orderDetails }) => {
    await axios.post(`${url}/api/orders`, orderDetails)
}
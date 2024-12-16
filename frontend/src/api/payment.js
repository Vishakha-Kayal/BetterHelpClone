import { url } from "../App"
import axios  from "axios"

export const createOrder = async ({ orderDetails }) => {
    return await axios.post(`${url}/api/orders`, orderDetails)
}
export const verifyPayment = async ({ orderId }) => {
    console.log(orderId)
    
    let res= await axios.post(`${url}/api/orders/verify`, {
        orderId:orderId
    })
    if(res && res.data){
        alert("Payment Verified")
    }

}
import { asyncHandler } from "../utils/asyncHandler.js";
import  Cashfree from "cashfree-pg"

const createOrder=asyncHandler(
    async(req,res)=>{
        const orderData = req.body;
        const {patientName,phoneNumber,amount}=orderData;
        console.log(orderData);
        const paymentData={
            orderId:`order_${Date.now()}`,
            orderAmount:amount,
            orderCurrency:'INR',
            orderNote:`Payment For ${patientName}`,
            customerName:patientName,
            customerPhone:phoneNumber
        };
        try {
            const response = await Cashfree.initPayment(paymentData);
            res.status(200).json(response); // Send response back to frontend
        } catch (error) {
            console.error("Payment initiation error:", error);
            res.status(500).json({ error: "Payment initiation failed" });
        }

    }
)

export{
    createOrder
}
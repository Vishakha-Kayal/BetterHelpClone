import { asyncHandler } from "../utils/asyncHandler.js";
import { Cashfree } from "cashfree-pg"

const createOrder = asyncHandler(
    async (req, res) => {
        const orderData = req.body;

        const { patientName, phoneNumber, amount } = orderData;

        console.log(orderData);
        try {
            const paymentData = {
                "order_amount": amount,
                "order_currency": "INR",
                "order_id": `order_${Date.now()}`,
                "customer_details": {
                    "customer_id": `${patientName.replace(/\s+/g,'')}_${amount}`,
                    "customer_phone": phoneNumber,
                    "customer_name": patientName,
                },
            };
            Cashfree.PGCreateOrder("2023-08-01", paymentData).then(response => {
                console.log(response.data);
                res.json(response.data);

            }).catch(error => {
                console.error(error.response.data.message);
            })
        } catch (error) {
            console.error("Payment initiation error:", error);
            res.status(500).json({ error: "Payment initiation failed" });
        }

    }
)

const verifyOrder = asyncHandler(async (req, res) => {
    console.log("verify called")
    const { orderId } = req.body;
    // console.log(orderId)
    Cashfree.PGOrderFetchPayments("2023-08-01", orderId).then((response) => {
        res.json({ response: response.data});
    }).catch(error => {
        console.error(error);
    })

})

export {
    createOrder,
    verifyOrder
}
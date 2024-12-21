import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {Cashfree} from "cashfree-pg";
const app = express();


app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'https://betterhelpclone.onrender.com'], // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true // Allow credentials if needed
}));

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", async (req, res) => {
  res.json({ message: "success" });
});

import userRouter from "./routes/users.routes.js";
app.use("/api/users", userRouter);

import userAccountRouter from "./routes/useraccount.routes.js"
app.use("/api/userAccount", userAccountRouter)

import adminRouter from "./routes/admin.routes.js";
app.use("/api/admin", adminRouter);

import blogRouter from "./routes/blogs.routes.js"
app.use("/api", blogRouter)

import farmerRouter from "./routes/farmer.routes.js"
app.use("/api/farmers", farmerRouter)

import studentRouter from "./routes/student.routes.js"
app.use("/api/students", studentRouter)

import groupRouter from "./routes/groups.routes.js"
app.use("/api/groups", groupRouter)

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
// Cashfree.CFEnvironment(Cashfree.CFEnvironment.SANDBOX);

import orderRouter from "./routes/order.routes.js"
app.use("/api/orders", orderRouter)

import doctorRouter from "./routes/doctors.routes.js"
app.use('/api/doctors',doctorRouter)

export { app };

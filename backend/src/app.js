import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", async (req, res) => {
  res.json({ message: "success" });
});

import userRouter from "./routes/users.routes.js";
app.use("/api/users", userRouter);

import adminRouter from "./routes/admin.routes.js";
app.use("/api/admin", adminRouter);

import blogRouter from "./routes/blogs.routes.js"
app.use("/api",blogRouter)

import farmerRouter from "./routes/farmer.routes.js"
app.use("/api/farmers",farmerRouter)

import studentRouter from "./routes/student.routes.js"
app.use("/api/students",studentRouter)

export { app };

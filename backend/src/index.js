import connectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", error => {
      console.log(error);
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`SERVER is running at port : ${process.env.PORT||3000}`);
    });
  })
  .catch(err => {
    console.log("Mongodb connection failed", err);
  });

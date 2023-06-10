import express from "express";
import bodyParser from "body-parser";
import PaymentsRoutes from "./Routes/Payments.routes.js";
import morgan from "morgan";

import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();
app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(PaymentsRoutes);

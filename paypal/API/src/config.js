import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const HOST = "http://localhost:" + PORT;

export const PAYPAL_ID = process.env.PAYPAL_ID;
export const PAYPAL_KEY = process.env.PAYPAL_KEY;
export const PAYPAL_API = "https://api-m.sandbox.paypal.com";

console.log(PAYPAL_API);

console.log(PAYPAL_ID);
console.log(PAYPAL_KEY);

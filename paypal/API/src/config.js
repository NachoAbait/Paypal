import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const HOST = "http://localhost:" + PORT;

export const PAYPAL_ID = "Ac5wmO2Z6zoS5MfHUnPD72ktLbw6Md6QHvFnu9QeW2O6kQyfCrAS3tLoIiLHs7XWcFzppzGVxs7smAjZ";
export const PAYPAL_KEY = "EFeGrVD8FA8lJNOIc8WXDs6jSGCZp0JiZhOszwWbHlnz67qrRysD8Ax2Y_itxmE4ErJ3VePQPQb1MHlj";
export const PAYPAL_API = "https://api-m.sandbox.paypal.com";

console.log(PAYPAL_API);

console.log(PAYPAL_ID);
console.log(PAYPAL_KEY);

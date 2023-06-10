import { HOST, PAYPAL_API, PAYPAL_ID, PAYPAL_KEY } from "../config.js";
import axios from "axios";

export const createOrder = async (req, res) => {
  // CREAMOS LA ORDEN CON LOS PRODUCTOS
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "ARS",
          value: 6000,
        },
      },
    ],
    application_context: {
      brand_name: "Prueba Paypal",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: `${HOST}/capture-order`,
      cancel_url: `${HOST}/cancel-order`,
    },
  };

  // AUTENTICARNOS
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const {
    data: { access_token },
  } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
    auth: {
      username: PAYPAL_ID,
      password: PAYPAL_KEY,
    },
  });

  // ENVIAMOS LA ORDEN CON EL PRODUCTO A PAYPAL
  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  console.log(response);
  return res.json("Create-order");
};

export const captureOrden = (req, res) => {
  res.json({ msg: "capture order" });
};

export const cancelOrder = (req, res) => {
  res.json({ msg: "cancel order" });
};

import { HOST, PAYPAL_API, PAYPAL_ID, PAYPAL_KEY } from "../config.js";
import axios from "axios";

export const createOrder = async (req, res) => {
  const producto = req.body;
  console.log("Este es el producto en createOrder");
  console.log(producto);

  // CREAMOS LA ORDEN CON LOS PRODUCTOS
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        items: [
          {
            name: producto.titulo,
            quantity: "1",
            description: "string",
            sku: "string",
            category: "DIGITAL_GOODS",
            unit_amount: {
              currency_code: "USD",
              value: `${producto.precio}`,
            },
          },
        ],
        amount: {
          currency_code: "USD",
          value: producto.precio,
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: `${producto.precio}`,
            },
          },
        },
      },
    ],
    application_context: {
      brand_name: "Prueba Paypal",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: `http://localhost:3001/capture-order`,
      cancel_url: `http://localhost:3001/cancel-order`,
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

  // ENVIAMOS LA ORDEN CON EL PRODUCTO A PAYPAL CON EL ACCESSTOKEN QUE NOS DA AL AUTENTICARNOS
  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res.json(response.data);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////**/

export const captureOrden = async (req, res) => {
  // sacamos el token que nos agg paypal automaticamente en la query al hacer el return_url
  const { token } = req.query;

  // ahora enviamos a paypal la confirmacion con ese token al siguiente link
  const response = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username:
          "Ac5wmO2Z6zoS5MfHUnPD72ktLbw6Md6QHvFnu9QeW2O6kQyfCrAS3tLoIiLHs7XWcFzppzGVxs7smAjZ",
        password:
          "EFeGrVD8FA8lJNOIc8WXDs6jSGCZp0JiZhOszwWbHlnz67qrRysD8Ax2Y_itxmE4ErJ3VePQPQb1MHlj",
      },
    }
  );

  console.log(response);

  return res.send("pagado");
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
export const cancelOrder = (req, res) => {
  res.redirect("https://paypal-gilt.vercel.app/");
};

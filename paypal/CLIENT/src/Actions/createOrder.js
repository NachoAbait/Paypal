import axios from "axios";

export function createOrder(producto) {
  return async function (dispatch) {
    console.log("estoy en la action y este es el producto");
    console.log(producto);

    try {
      var data = await axios.post(
        `/create-orden`,
        producto
      );
      console.log(data.data.links[1].href);
      return dispatch({
        type: "CREATE_ORDER",
        payload: data.data.links[1].href,
      });
    } catch (error) {
      return { msg: "Ha ocurrido un error" };
    }
  };
}

export function addToCart(producto) {
  return function (dispatch) {
    console.log("estoy ne la action y este es el producto");
    console.log(producto);
    return dispatch({
      type: "ADD_CART",
      payload: producto,
    });
  };
}

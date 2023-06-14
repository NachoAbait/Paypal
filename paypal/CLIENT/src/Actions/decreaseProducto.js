export function decreaseProduct(producto) {
  return function (dispatch) {
    return dispatch({
      type: "DECREASE_PRODUCT",
      payload: producto,
    });
  };
}

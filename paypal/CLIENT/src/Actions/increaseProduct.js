export function increaseProduct(producto) {
  return function (dispatch) {
    return dispatch({
      type: "INCREASE_PRODUCT",
      payload: producto,
    });
  };
}

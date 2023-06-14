export function cleanCart() {
  return function (dispatch) {
    return dispatch({
      type: "CLEAN_CART",
      payload: "",
    });
  };
}

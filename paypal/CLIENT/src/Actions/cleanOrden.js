export function cleanOrder() {
  return function (dispatch) {
    return dispatch({
      type: "CLEAN_ORDER",
      payload: "",
    });
  };
}

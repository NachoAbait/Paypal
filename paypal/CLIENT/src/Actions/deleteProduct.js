export function deleteProduct(producto) {
    return function (dispatch) {
      return dispatch({
        type: "DELETE_PRODUCT",
        payload: producto,
      });
    };
  }
  
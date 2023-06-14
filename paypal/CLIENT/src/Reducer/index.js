const initialState = {
  init_endpoint: [],
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_ORDER":
      return {
        ...state,
        init_endpoint: action.payload,
      };

    case "CLEAN_ORDER":
      return {
        ...state,
        init_endpoint: "",
      };

    case "ADD_CART":
      // EXTRAEMOS EL PRODUCTO
      const producto = action.payload;
      // VALIDAMOS SI YA SE ENCUENTRA EN EL ARRAY. SI NO, DEVOLVERA -1
      const productoRepetidoIndex = state.cart.findIndex(
        (product) => product.titulo === producto.titulo
      );

      if (productoRepetidoIndex !== -1) {
        const updateCart = [...state.cart]; // copiamos el array del estado para actualizarlo y devolverlo como el nuevo
        updateCart[productoRepetidoIndex].cantidad++;
        return {
          ...state,
          cart: updateCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, producto],
        };
      }

    case "CLEAN_CART":
      return {
        ...state,
        cart: "",
      };

    case "DELETE_PRODUCT":
      const producto2 = action.payload;
      const carritoActualizado = [...state.cart];
      const Index = state.cart.findIndex(
        (product) => product.titulo === producto2.titulo
      );
      carritoActualizado.splice(Index, 1);

      return {
        ...state,
        cart: carritoActualizado,
      };

    case "DECREASE_PRODUCT":
      // EXTRAEMOS EL PRODUCTO
      const producto3 = action.payload;
      // VALIDAMOS SI YA SE ENCUENTRA EN EL ARRAY. SI NO, DEVOLVERA -1
      const Indexx = state.cart.findIndex(
        (product) => product.titulo === producto3.titulo
      );

      const updateCart = [...state.cart]; // copiamos el array del estado para actualizarlo y devolverlo como el nuevo

      if (updateCart[Indexx].cantidad !== 1) {
        updateCart[Indexx].cantidad--;
        return {
          ...state,
          cart: updateCart,
        };
      } else {
        return {
          ...state,
          cart: updateCart,
        };
      }

    case "INCREASE_PRODUCT":
      // EXTRAEMOS EL PRODUCTO
      const producto4 = action.payload;
      // VALIDAMOS SI YA SE ENCUENTRA EN EL ARRAY. SI NO, DEVOLVERA -1
      const Indexxx = state.cart.findIndex(
        (product) => product.titulo === producto4.titulo
      );

      const Cart = [...state.cart]; // copiamos el array del estado para actualizarlo y devolverlo como el nuevo

      Cart[Indexxx].cantidad++;
      return {
        ...state,
        cart: Cart,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;

const initialState = {
  init_endpoint: [],
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

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;

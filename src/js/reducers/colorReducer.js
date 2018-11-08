const colorReducer = (state = initialColorState, action) => {
  let newState = state;
  switch (action.type) {
    case "SET_COLOR":
      newState = Object.assign({}, state);
      newState.color = action.payload;
      break;
  }
  return newState;
};

export default colorReducer;

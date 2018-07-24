const colorReducer = (state = initialColorState, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case "SET_COLOR":
      newState.color = action.payload;
      break;
  }
  return newState;
};

export default colorReducer;

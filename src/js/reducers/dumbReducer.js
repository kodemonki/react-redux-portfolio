const initialState = {
  initialised: "initialised"
};

const dumbReducer = (state = initialState, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case "CONSOLE_LOG":
      console.log("CONSOLE_LOG "+action.payload);
      break;
  }
  return newState;
}

export default dumbReducer;

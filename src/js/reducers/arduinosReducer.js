const initialState = {
  arduinos: []
};

const arduinosReducer = (state = initialState, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case "GET_ARDUINOS_RESPONSE":
      var newArduinos = [].concat(newState.arduinos);
      action.payload.data.map((arduino, index) => {
        const newArduino = {
          title:arduino.title.rendered,
          description:arduino.acf.description,
          screenshot:arduino.acf.screenshot
        };
        newArduinos.push(newArduino);
      });
      console.log(newState);
      newState.arduinos = newArduinos;
      break;
    case "GET_ARDUINOS_ERROR":
      console.log("GET_ARDUINOS_ERROR",action.payload);
      break;
  }
  return newState;
}

export default arduinosReducer;

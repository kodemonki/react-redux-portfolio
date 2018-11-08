const initialState = {
  arduinos: []
};

const arduinosReducer = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case "GET_ARDUINOS_RESPONSE":
      newState = Object.assign({}, state);
      let newArduinos = [];
      action.payload.data.map((arduino, index) => {
        const newArduino = {
          title: arduino.title.rendered,
          description: arduino.acf.description,
          screenshot: arduino.acf.screenshot
        };
        newArduinos.push(newArduino);
      });
      newState.arduinos = newArduinos;
      break;
    case "GET_ARDUINOS_ERROR":
      console.log("GET_ARDUINOS_ERROR", action.payload);
      break;
  }
  return newState;
};

export default arduinosReducer;

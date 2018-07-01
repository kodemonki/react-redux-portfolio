import axios from "axios";

export function getArduinosAction() {
  return dispatch => {
    axios
      .get(
        "https://kodemonki.com/wordpress/?rest_route=/wp/v2/arduinos&per_page=20"
      )
      .then(function(response) {
        dispatch({ type: "GET_ARDUINOS_RESPONSE", payload: response });
      })
      .catch(function(error) {
        dispatch({ type: "GET_ARDUINOS_ERROR", payload: error });
      });
  };
}

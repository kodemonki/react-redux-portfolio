import axios from "axios";

export function getProjectsAction() {
  return dispatch => {
    axios
      .get(
        "https://kodemonki.com/wordpress/?rest_route=/wp/v2/projects&per_page=20"
      )
      .then(function(response) {
        dispatch({ type: "GET_PROJECTS_RESPONSE", payload: response });
      })
      .catch(function(error) {
        dispatch({ type: "GET_PROJECTS_ERROR", payload: error });
      });
  };
}

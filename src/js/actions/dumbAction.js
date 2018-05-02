import axios from 'axios';

export function dumbAction(text) {
  /*
  return {
    type: "CONSOLE_LOG",
    payload: text
  }
  */
  return dispatch => {
    axios.get('http://kodemonki.com/wordpress/?rest_route=/wp/v2/projects')
      .then(function (response) {
        dispatch({type:'CONSOLE_LOG',payload:response});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

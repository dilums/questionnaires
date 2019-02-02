import axios from "axios";

// Get question list from the server
export const getList = data => dispatch => {
  dispatch({ type: "LIST_LOADING" });
  axios
    .get(`https://questionnaires-api.herokuapp.com/qlist`)
    .then(res => {
      dispatch({
        type: "LIST_DONE",
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: "LIST_ERROR" }));
};

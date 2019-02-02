import axios from "axios";

// Get QA set from the server
export const getSet = data => dispatch => {
  if (data.type === "anwser") {
    dispatch({ type: "LOADING", payload: data });
  } else {
    dispatch({ type: "INIT", payload: data });
  }
  axios
    .get(`https://questionnaires-api.herokuapp.com/set?${data.type}=${data.id}`)
    .then(res => {
      if (res.data.finish === undefined) {
        dispatch({
          type: "DONE",
          payload: res.data
        });
      } else {
        dispatch({
          type: "FINISH",
          payload: res.data
        });
      }
    })
    .catch(err => dispatch({ type: "ERROR" }));
};

// Send the QA log to the server
export const sendLog = data => dispatch => {
  axios
    .post(`https://questionnaires-api.herokuapp.com/log`, data)
    .then(res => {
      dispatch({ type: "LOG_SENT" });
      console.log(res.data);
    })
    .catch(err => console.log("Error occured when sending the log"));
};

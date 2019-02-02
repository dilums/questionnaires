const initialState = {
  data: {},
  loading: true,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "LIST_DONE": // Received question list successfully
      return { ...state, data: action.payload, loading: false };
    case "LIST_LOADING": // Waiting for the response for get question list request
      return { ...initialState };
    case "LIST_ERROR": // Error occured while getting the questing list
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

const initialState = {
  data: {},
  loading: true,
  error: false,
  finish: false
};

export default function(state = { ...initialState, history: [] }, action) {
  switch (action.type) {
    case "INIT": // Register first question
      return { ...initialState, history: [action.payload] };
    case "DONE": // Recived question and anwser variants data
      return { ...state, data: action.payload, loading: false };
    case "LOADING": // Waiting for question and anwsers data
      return { ...initialState, history: [...state.history, action.payload] };
    case "ERROR": // Error occured while receiving the question and anwser data
      return { ...state, error: true, loading: false };
    case "FINISH": // Received the last response in the conversation
      return {
        ...state,
        finish: true,
        loading: false,
        message: action.payload.message
      };
    case "LOG_SENT": // Successfully sent the QA log to the server
      return { ...state, history: [] };
    default:
      return state;
  }
}

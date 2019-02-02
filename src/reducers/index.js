import { combineReducers } from "redux";

import qaReducer from "./qaReducer";
import listReducer from "./listReducer";

export default combineReducers({
  qa: qaReducer,
  list: listReducer
});

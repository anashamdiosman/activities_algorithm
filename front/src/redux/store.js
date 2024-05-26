import { combineReducers } from "redux";
import survey1 from "./reducers/survery1";
import showModal from "./reducers/showModal";

const rootReducer = combineReducers({
  survey1,
  showModal,
});

export default rootReducer;

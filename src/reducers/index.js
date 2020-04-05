import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import dataReducers from "./dataReducers";

const rootReducer = combineReducers({
  loading: loadingReducer,
  data: dataReducers
});

export default rootReducer;

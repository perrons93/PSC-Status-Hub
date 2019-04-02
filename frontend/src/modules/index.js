import { combineReducers } from "redux";
import localize from "./LocalizeRedux";
import testStatus from "./TestStatusRedux";

export default combineReducers({ localize, testStatus });

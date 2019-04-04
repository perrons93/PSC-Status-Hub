import { combineReducers } from "redux";
import localize from "./LocalizeRedux";
import testStatus from "./TestStatusRedux";
import emibInbox from "./EmibInboxRedux";

export default combineReducers({ localize, emibInbox, testStatus });

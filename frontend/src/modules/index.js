import { combineReducers } from "redux";
import localize from "./LocalizeRedux";
import emibInbox from "./EmibInboxRedux";

export default combineReducers({ localize, emibInbox });

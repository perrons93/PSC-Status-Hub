import { combineReducers } from "redux";
import localize from "./LocalizeRedux";
import testStatus from "./TestStatusRedux";
import emibInbox from "./EmibInboxRedux";
import emailReadStatus from "./ReadEmailRedux";

export default combineReducers({ localize, emibInbox, testStatus, emailReadStatus });

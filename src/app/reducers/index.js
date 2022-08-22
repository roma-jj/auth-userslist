import {combineReducers} from "@reduxjs/toolkit";
import {connectRouter} from "connected-react-router";
import authReducer from "./auth";
import usersReducer from "./users";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    users: usersReducer
});

export default rootReducer;
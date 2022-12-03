import { legacy_createStore as createStore, combineReducers } from "redux";
import adminReducer from "./reducers/admin.reducer";
import { createWrapper } from "next-redux-wrapper";
import alertReducer from "./reducers/alert.reducer";

export const store = createStore(combineReducers({
	admin: adminReducer,
	alert: alertReducer
}));


const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
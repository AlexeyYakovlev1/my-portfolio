import { legacy_createStore as createStore, combineReducers } from "redux";
import adminReducer from "./reducers/admin.reducer";
import { createWrapper } from "next-redux-wrapper";

export const store = createStore(combineReducers({
	admin: adminReducer
}));


const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
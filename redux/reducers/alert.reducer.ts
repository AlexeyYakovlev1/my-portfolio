import { IActionAlert, IAlert } from "../../models/redux/alert.models";

const initialState: IAlert = {
	type: "SUCCESS",
	text: ""
};

const SET_ALERT = "SET_ALERT";

const alertReducer = (state = initialState, action: IActionAlert) => {
	switch (action.type) {
		case SET_ALERT:
			return action.payload;
		default:
			return state;
	}
};

export default alertReducer;
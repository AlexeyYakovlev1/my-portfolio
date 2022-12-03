import { IActionAlert, IAlert } from "../../models/redux/alert.models";

export const setAlert = (info: IAlert): IActionAlert => {
	return {
		type: "SET_ALERT",
		payload: info
	};
};
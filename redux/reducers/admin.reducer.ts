import { IAdmin } from "../../models/admin/admin.model";
import { IActionAdmin } from "../../models/redux/admin.models";

const initialState = {
	auth: false,
	roles: [],
	admin: {
		id: -1,
		name: "",
		email: "",
		password: ""
	} as IAdmin
};

export const SET_ADMIN = "SET_ADMIN";

const adminReducer = (state = initialState, action: IActionAdmin) => {
	switch (action.type) {
		case SET_ADMIN:
			return {
				...action.payload,
				auth: true
			};
		default:
			return state;
	}
};

export default adminReducer;
import { IAdmin } from "../../models/admin/admin.model";
import { IActionAdmin } from "../../models/redux/admin.models";
import { SET_ADMIN } from "../reducers/admin.reducer";

export const setAdmin = (admin: IAdmin): IActionAdmin => {
	return {
		type: SET_ADMIN,
		payload: admin
	};
};
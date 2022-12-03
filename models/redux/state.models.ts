import { IAdmin } from "../admin/admin.model";
import { IAlert } from "./alert.models";

export interface IState {
	admin: {
		auth: boolean;
		roles: Array<string>;
		admin: IAdmin;
	},
	alert: IAlert;
}
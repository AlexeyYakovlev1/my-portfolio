import { IAdmin } from "../admin/admin.model";

export interface IState {
	admin: {
		auth: boolean;
		roles: Array<string>;
		admin: IAdmin;
	}
}
import { IAdmin } from "../admin/admin.model";

export interface IActionAdmin {
	type: string;
	payload: IAdmin;
}
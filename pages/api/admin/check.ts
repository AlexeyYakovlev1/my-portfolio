import { NextApiResponse } from "next";
import db from "../../../db/index";
import initMiddleware from "../../../middlewares/init.middleware";
import rolesMiddleware, { IReqAdds } from "../../../middlewares/roles.middleware";
import { sign } from "jsonwebtoken";

db.sequelize.sync();

const Admin = db.admins;
const { JWT_KEY } = process.env;

const accessForAdmin = initMiddleware(rolesMiddleware(["ADMIN"]));

export default async (req: IReqAdds, res: NextApiResponse) => {
	if (req.method !== "GET") {
		return res.status(400).json({ success: false, message: "Только GET запрос" });
	}

	await accessForAdmin(req, res);

	try {
		const { email } = req.admin;
		const findAdminByEmail = await Admin.findOne({ where: { email } });
		const payload = { id: findAdminByEmail.id, roles: ["ADMIN"], email };
		const token = sign(payload, `${JWT_KEY}`);

		return res.status(200).json({ success: true, token, admin: findAdminByEmail });
	} catch (error: any) {
		return res.status(500).json({ success: false, message: error.message, error });
	}
};
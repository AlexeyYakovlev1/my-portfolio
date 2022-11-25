import { check, validationResult } from "express-validator";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../db/index";
import initMiddleware from "../../../middlewares/init.middleware";
import validateMiddleware from "../../../middlewares/validate.middleware";

db.sequelize.sync();

const Admin = db.admins;

const validateBody = initMiddleware(
	validateMiddleware([
		check("name").isLength({ min: 3, max: 15 }),
		check("email").isEmail(),
		check("password").isLength({ min: 6, max: 30 })
	], validationResult)
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(400).json({ success: false, message: "Только POST запрос" });
	}

	await validateBody(req, res);

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false, message: "Ошибка валидации", errors: errors.array()
		});
	}

	try {
		const { name, email, password } = req.body;
		const findAdminByEmail = await Admin.findOne({ where: { email } });

		if (findAdminByEmail) {
			return res.status(400).json({ success: false, message: "Администратор по такой почте уже существует" });
		}

		const newAdmin = await Admin.create({ name, email, password });

		return res.status(201).json({ success: true, message: "Администратор добавлен", admin: newAdmin });
	} catch (error: any) {
		return res.status(500).json({ success: false, message: error.message, error });
	}
};
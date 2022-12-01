import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../db/index";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import initMiddleware from "../../../middlewares/init.middleware";
import validateMiddleware from "../../../middlewares/validate.middleware";
import { check, validationResult } from "express-validator";

db.sequelize.sync();

const Admin = db.admins;
const { JWT_KEY } = process.env;

const validateBody = initMiddleware(
	validateMiddleware(
		[
			check("email").isEmail(),
			check("password").isLength({ min: 6, max: 30 })
		], validationResult
	)
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
		const { email, password } = req.body;
		const findAdminByEmail = await Admin.findOne({ where: { email } });

		if (!findAdminByEmail) {
			return res.status(400).json({ success: false, message: "Администратор не найден" });
		}

		const comparePassword = await compare(password, findAdminByEmail.password);

		if (!comparePassword) {
			return res.status(400).json({ success: false, message: "Данные неверны" });
		}

		const payload = { id: findAdminByEmail.id, roles: ["ADMIN"], email };
		const token = sign(payload, `${JWT_KEY}`, { expiresIn: "24h" });

		return res.status(200).json({
			success: true, message: "Вход успешно выполнен", token, admin: findAdminByEmail
		});
	} catch (error: any) {
		return res.status(500).json({ success: false, message: error.message, error });
	}
};
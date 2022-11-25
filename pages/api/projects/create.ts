import { check, validationResult } from "express-validator";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../db/index";
import initMiddleware from "../../../middlewares/init.middleware";
import rolesMiddleware from "../../../middlewares/roles.middleware";
import validateMiddleware from "../../../middlewares/validate.middleware";

db.sequelize.sync();
const Project = db.projects;

const validateBody = initMiddleware(
	validateMiddleware([
		check("name").isLength({ min: 3, max: 20 }),
		check("description").isLength({ min: 10 }),
		check("link").isLength({ min: 10 }),
		check("images").isArray().not().isEmpty(),
		check("technology").isArray().not().isEmpty()
	], validationResult)
);

const checkAdmin = initMiddleware(rolesMiddleware(["ADMIN"]));

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(400).json({ success: false, message: "Только POST запрос" });
	}

	await checkAdmin(req, res);
	// await validateBody(req, res);

	// const errors = validationResult(req);

	// if (!errors.isEmpty()) {
	// 	return res.status(422).json({ errors: errors.array() });
	// }

	try {
		const { name, description, link, images, technology } = req.body;
		const findProjectByName = await Project.findOne({ where: { name } });

		if (findProjectByName) {
			return res.status(400).json({
				success: false,
				message: "Проект с таким именем уже существует"
			});
		}

		const newProject = await Project.create({
			name, description, link, images, technology
		});

		return res.status(201).json({
			success: true, message: "Проект добавлен", project: newProject
		});
	} catch (error: any) {
		return res.status(500).json({ success: false, message: error.message, error });
	}
};
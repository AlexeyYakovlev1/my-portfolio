import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../db/index";

db.sequelize.sync();
const Project = db.projects;

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "GET") {
		return res.status(400).json({ success: false, message: "Только GET запрос" });
	}

	try {
		const projects = await Project.findAll();

		return res.status(200).json({ success: true, projects });
	} catch (error: any) {
		res.status(500).json({ success: false, message: error.message, error });
	}
};
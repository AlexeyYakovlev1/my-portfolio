import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../db/index";

db.sequelize.sync();

const Technology = db.techs;

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "GET") {
		return res.status(400).json({ success: false, message: "Только GET запрос" });
	}

	try {
		const allTechs = await Technology.findAll();

		return res.status(200).json({ success: true, techs: allTechs });
	} catch (error: any) {
		return res.status(500).json({ success: false, message: error.message, error });
	}
};
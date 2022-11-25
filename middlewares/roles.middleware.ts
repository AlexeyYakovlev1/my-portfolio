import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";

const { JWT_TOKEN } = process.env;

export default (roles: Array<string>) => {
	return (req: NextApiRequest, res: NextApiResponse, next: any) => {
		try {
			if (!roles.length) {
				return res.status(400).json({ success: false, message: "Нет доступа" });
			}

			const token = req.headers.authorization?.split(" ")[1];

			if (!token) {
				return res.status(400).json({ success: false, message: "Нет доступа" });
			}

			const { roles: userRoles }: any = verify(token, `${JWT_TOKEN}`);

			roles.forEach((r: string) => {
				if (!userRoles.includes(r)) {
					return res.status(400).json({ success: false, message: "Нет доступа" });
				}

				return next();
			});
		} catch (error: any) {
			return res.status(500).json({ success: false, message: error.message, error });
		}
	};
};
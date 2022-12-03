import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";

const { JWT_KEY } = process.env;

export interface IReqAdds extends NextApiRequest { admin: any; }

export default (roles: Array<string>) => {
	return (req: IReqAdds, res: NextApiResponse, next: any) => {
		try {
			if (!roles.length) {
				return res.status(400).json({
					success: false, message: "You must give roles in this middleware"
				});
			}

			const token = req.headers.authorization?.split(" ")[1];

			if (!token) {
				if (req.query.forget === "true") {
					return res.status(200).json({ success: false, message: "Нет доступа", forget: true });
				}

				return res.status(200).json({ success: false, message: "Нет доступа" });
			}

			const decoded: any = verify(token, `${JWT_KEY}`);

			roles.forEach((r: string) => {
				if (!decoded.roles.includes(r)) {
					return res.status(400).json({ success: false, message: "Нет доступа" });
				}
			});

			req.admin = decoded;
			next();
		} catch (error: any) {
			return res.status(500).json({ success: false, message: error.message, error });
		}
	};
};
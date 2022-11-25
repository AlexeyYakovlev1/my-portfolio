import { NextApiRequest, NextApiResponse } from "next";

export default (validations: any, validationResult: any) => {
	return async (req: NextApiRequest, res: NextApiResponse, next: any) => {
		await Promise.all(validations.map((validation: any) => validation.run(req)));

		const errors = validationResult(req);

		if (errors.isEmpty()) {
			return next();
		}

		return res.status(400).json({
			success: false, message: "Ошибка валидации", errors: errors.array()
		});
	};
};
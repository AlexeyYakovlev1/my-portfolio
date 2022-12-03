export interface IAlert {
	type: "SUCCESS" | "ERROR" | "WARNING";
	text: string;
}

export interface IActionAlert {
	type: string;
	payload: IAlert;
}
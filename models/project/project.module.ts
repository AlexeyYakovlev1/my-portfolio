export interface IProject {
	id: number;
	name: string;
	description: string;
	link: string;
	images: Array<{
		name: string;
		img: any;
	}>;
	technology: Array<{
		name: string;
		img: any;
	}>;
}
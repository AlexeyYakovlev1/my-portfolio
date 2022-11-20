import JsIcon from "./public/assets/images/technology/javascript.svg";
import TsIcon from "./public/assets/images/technology/typescript.svg";
import ReactIcon from "./public/assets/images/technology/react.svg";
import ReduxIcon from "./public/assets/images/technology/redux.svg";
import NextIcon from "./public/assets/images/technology/nextjs.svg";
import NodeIcon from "./public/assets/images/technology/nodejs.svg";
import ExpressIcon from "./public/assets/images/technology/express.svg";
import PostgIcon from "./public/assets/images/technology/postgresql.svg";
import MongoIcon from "./public/assets/images/technology/mongodb.svg";
import GitIcon from "./public/assets/images/technology/git.svg";

import ShareListAuthIcon from "./public/assets/images/projects/share-life/auth.jpg";
import ShareListCreatePostIcon from "./public/assets/images/projects/share-life/createPost.jpg";
import ShareListViewPostIcon from "./public/assets/images/projects/share-life/viewPost.jpg";
import ShareLifePostIcon from "./public/assets/images/projects/share-life/post.jpg";
import ShareLifeChangePost from "./public/assets/images/projects/share-life/change.jpg";
import ShareLifeProfileIcon from "./public/assets/images/projects/share-life/profile.jpg";
import ShareLifeSettingsIcon from "./public/assets/images/projects/share-life/settings.jpg";
import ShareLifeAdminIcon from "./public/assets/images/projects/share-life/admin.jpg";
import ShareLifeAdminChangeIcon from "./public/assets/images/projects/share-life/adminChange.jpg";

import TelegramIcon from "./public/assets/images/socialNetworks/telegram.svg";
import GmailIcon from "./public/assets/images/socialNetworks/gmail.svg";
import VkIcon from "./public/assets/images/socialNetworks/vk.svg";

export interface ITechnology {
	title: string;
	link: string;
	description: string;
	img: any;
}

export interface IProject {
	images: Array<any>;
	name: string;
	description: string;
	link: string;
	technology: Array<{ name: string; img: any }>;
}

export interface ISocialNetwork {
	name: string;
	link: string;
	img: any;
}

export const technology: Array<ITechnology> = [
	{
		title: "Javascript",
		link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
		description: "Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.",
		img: JsIcon
	},
	{
		title: "Typescript",
		link: "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html",
		description: "Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.",
		img: TsIcon
	},
	{
		title: "React",
		link: "https://reactjs.org/docs/getting-started.html",
		description: "JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.",
		img: ReactIcon
	},
	{
		title: "Redux",
		link: "https://redux.js.org/",
		description: "Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.",
		img: ReduxIcon
	},
	{
		title: "Next.js",
		link: "https://nextjs.org/",
		description: "Открытый JavaScript фреймворк, созданный поверх React.js для создания веб-приложений. Фреймворк был предназначен для решения проблемы React.js, связанную с отрисовкой приложения на стороне сервера - SSR. Работает на сервере и в браузере.",
		img: NextIcon
	},
	{
		title: "Node.js",
		link: "https://nodejs.org/en/",
		description: "Программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API",
		img: NodeIcon
	},
	{
		title: "Express",
		link: "http://expressjs.com/",
		description: "Имея в своем распоряжении множество служебных методов HTTP и промежуточных обработчиков, создать надежный API можно быстро и легко. ",
		img: ExpressIcon
	},
	{
		title: "PostgreSQL",
		link: "https://www.postgresql.org/",
		description: "Свободная объектно-реляционная система управления базами данных.",
		img: PostgIcon
	},
	{
		title: "MongoDB",
		link: "https://www.mongodb.com/what-is-mongodb",
		description: "Документоориентированная система управления базами данных, не требующая описания схемы таблиц",
		img: MongoIcon
	},
	{
		title: "Git",
		link: "https://git-scm.com/",
		description: "Является распределенной системой для управления версиями разрабатываемых файлов. ",
		img: GitIcon
	}
];

export const socialNetworks: Array<ISocialNetwork> = [
	{
		name: "Телеграм",
		link: "https://t.me/quod_42",
		img: TelegramIcon
	},
	{
		name: "Почта",
		link: "mailto:alexeyykovlev555@gmail.com",
		img: GmailIcon
	},
	{
		name: "Вконтакте",
		link: "https://vk.com/quod_42",
		img: VkIcon
	},
];

export const projects: Array<IProject> = [
	{
		images: [
			"/assets/images/projects/share-life/auth.jpg",
			"/assets/images/projects/share-life/createPost.jpg"
		],
		name: "Share-life",
		description: "Блог, в котором ты можешь постить свои темы, комментировать посты и подписываться на людей",
		link: "https://github.com/AlexeyYakovlev1/share-life",
		technology: [
			{
				name: "Typescript",
				img: TsIcon
			},
			{
				name: "React",
				img: ReactIcon
			},
			{
				name: "Redux",
				img: ReduxIcon
			},
			{
				name: "Node.js",
				img: NodeIcon
			},
			{
				name: "PostgreSQL",
				img: PostgIcon
			}
		]
	},
	{
		images: [
			"/assets/images/projects/share-life/auth.jpg",
			"/assets/images/projects/share-life/createPost.jpg"
		],
		name: "Share-life",
		description: "Блог, в котором ты можешь постить свои темы, комментировать посты и подписываться на людей",
		link: "https://github.com/AlexeyYakovlev1/share-life",
		technology: [
			{
				name: "Typescript",
				img: TsIcon
			},
			{
				name: "React",
				img: ReactIcon
			},
			{
				name: "Redux",
				img: ReduxIcon
			},
			{
				name: "Node.js",
				img: NodeIcon
			},
			{
				name: "PostgreSQL",
				img: PostgIcon
			}
		]
	},
	{
		images: [
			"/assets/images/projects/share-life/auth.jpg",
			"/assets/images/projects/share-life/createPost.jpg"
		],
		name: "Share-life",
		description: "Блог, в котором ты можешь постить свои темы, комментировать посты и подписываться на людей",
		link: "https://github.com/AlexeyYakovlev1/share-life",
		technology: [
			{
				name: "Typescript",
				img: TsIcon
			},
			{
				name: "React",
				img: ReactIcon
			},
			{
				name: "Redux",
				img: ReduxIcon
			},
			{
				name: "Node.js",
				img: NodeIcon
			},
			{
				name: "PostgreSQL",
				img: PostgIcon
			}
		]
	}
];
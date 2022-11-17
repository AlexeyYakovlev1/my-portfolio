"use client";

import classes from "./Technology.module.sass";
import JsIcon from "../../public/assets/images/javascript.svg";
import TsIcon from "../../public/assets/images/typescript.svg";
import ReactIcon from "../../public/assets/images/react.svg";
import ReduxIcon from "../../public/assets/images/redux.svg";
import NextIcon from "../../public/assets/images/nextjs.svg";
import NodeIcon from "../../public/assets/images/nodejs.svg";
import ExpressIcon from "../../public/assets/images/express.svg";
import PostgIcon from "../../public/assets/images/postgresql.svg";
import MongoIcon from "../../public/assets/images/mongodb.svg";
import GitIcon from "../../public/assets/images/git.svg";
import Link from "next/link";
import Image from "next/image";

interface ITechnology {
	title: string;
	link: string;
	description: string;
	img: any;
}

function Technology() {
	const technology: Array<ITechnology> = [
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

	return (
		<section className={classes.technology}>
			<header className="container">
				<h2 className={classes.title}>Технологии, которые я использую</h2>
			</header>
			<div className="container">
				<ul className={classes.list}>
					{technology.map((tech: ITechnology) => {
						return (
							<li key={tech.link}>
								<header>
									<Image
										src={tech.img}
										width="64"
										height="64"
										alt={tech.title}
									/>
									<h3>{tech.title}</h3>

								</header>
								<p>{tech.description}</p>
								<Link href={tech.link}>Дополнительно</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default Technology;
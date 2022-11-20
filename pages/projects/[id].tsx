"use client";

import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import { IProject } from "../../models/project/project.module";
import classes from "./Project.module.sass";
import cn from "classnames";
import Image from "next/image";

import TsIcon from "../../public/assets/images/technology/typescript.svg";
import ReactIcon from "../../public/assets/images/technology/react.svg";
import ReduxIcon from "../../public/assets/images/technology/redux.svg";
import Title from "../../components/UI/Title/Title";
import Description from "../../components/UI/Description/Description";
import Button from "../../components/UI/Button/Button";
import Link from "next/link";

const ProjectPage = (): JSX.Element => {
	const project: IProject = {
		id: -1,
		name: "Share-Life",
		description: "Это приложение является социальной сетью, где вы можете публиковать свои интересы или свою жизнь и получать обратную связь.",
		link: "https://github.com/AlexeyYakovlev1/share-life",
		images: [
			{
				name: "Регистрация",
				img: "/assets/images/projects/share-life/auth.jpg"
			},
			{
				name: "Создание поста",
				img: "/assets/images/projects/share-life/createPost.jpg"
			},
			{
				name: "Главная страница, просмотр поста",
				img: "/assets/images/projects/share-life/viewPost.jpg"
			}
		],
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
			}
		]
	};

	return (
		<MainLayout title={project.name}>
			<article className={classes.wrapper}>
				<header className={cn(classes.header, "container")}>
					<Title type="H1">{project.name}</Title>
					<Description type="MIDDLE">{project.description}</Description>
					<div className={classes.technology}>
						<Title type="H3">Используемые технологии</Title>
						<ul>
							{project.technology.map((tech) => {
								return (
									<li key={tech.name} title={tech.name}>
										<Image
											src={tech.img}
											alt={tech.name}
											width={32}
											height={32}
										/>
									</li>
								);
							})}
						</ul>
					</div>
					<Button>
						<Link href={project.link}>Смотреть</Link>
					</Button>
				</header>
				<section className={classes.content}>
					<header className={"container"}>
						<Title
							className={classes.contentTitle}
							type="H2"
						>
							Страницы и компоненты
						</Title>
					</header>
					<div className="container">
						<ul className={classes.pages}>
							{project.images.map((page) => {
								return (
									<li
										key={page.name}
										className={classes.pagesItem}
										style={{ backgroundImage: `url(${page.img})` }}
									>
										<div className={classes.pagesItemInfo}>
											<Description type="BIG">{page.name}</Description>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			</article>
		</MainLayout>
	);
};

export default ProjectPage;
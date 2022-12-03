"use client";

import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import classes from "./Projects.module.sass";
import cn from "classnames";
import Description from "../../components/UI/Description/Description";
import Title from "../../components/UI/Title/Title";
import Filters from "../../components/Filters/Filters";
import { IProject } from "../../data";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/UI/Button/Button";
import React from "react";

interface IProjectsPageProps {
	projects: Array<IProject> | null;
}

const { API_URL } = process.env;

const ProjectsPage = ({ projects }: IProjectsPageProps): JSX.Element => {
	const [openFilts, setOpenFilts] = React.useState<boolean>(false);

	return (
		<MainLayout title="Проекты Алексея Яковлева">
			<article className={cn(classes.wrapper, "container")}>
				<header className={classes.header}>
					<Title type="H1" className={classes.title}>Моя работа</Title>
					<Description type="MIDDLE" className={classes.description}>
						Здесь Вы увидите несколько проектов, над которыми я
						работал или работаю до сих пор.
					</Description>
					<div className={classes.filtersMobile}>
						<Button
							onClick={() => setOpenFilts(!openFilts)}
						>
							{!openFilts ? "Открыть фильры" : "Закрыть фильтры"}
						</Button>
						{openFilts && <Filters />}
					</div>
				</header>
				<section className={classes.projects}>
					<ul className={classes.list}>
						{(projects && projects.length) ? projects.map((project: IProject) => {
							return (
								<li key={project.link} className={classes.listItem}>
									<header className={classes.listItemHeader}>
										<div
											style={{ backgroundImage: `url(${project.images[0]})` }}
											className={classes.listItemPhoto}
										></div>
										<Title
											className={classes.listItemTitle}
											type="H2"
										>
											{project.name}
										</Title>
									</header>
									<Description
										className={classes.listItemDescription}
										type="MIDDLE"
									>
										{project.description}
									</Description>
									<footer className={classes.listItemFooter}>
										<div className={classes.listItemTechnology}>
											<ul>
												{project.technology.map((tech: any) => {
													return (
														<Image
															width={32}
															height={32}
															key={tech.name}
															src={tech.img}
															alt={tech.name}
															title={tech.name}
														/>
													);
												})}
											</ul>
										</div>
										<Button>
											<Link href={"/projects/2"}>Узнать больше</Link>
										</Button>
									</footer>
								</li>
							);
						}) : <Title type="H3">Проекты в разработке...</Title>}
					</ul>
					<Filters className={classes.filters} />
				</section>
			</article>
		</MainLayout>
	);
};

export default ProjectsPage;

ProjectsPage.getInitialProps = async ({ req }: any) => {
	if (!req) return { projects: null };

	const response = await fetch("http://localhost:3000/api/projects/getAll");
	const projects = await response.json();

	return { projects };
};
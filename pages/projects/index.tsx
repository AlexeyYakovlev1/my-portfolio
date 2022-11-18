"use client";

import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import classes from "./Projects.module.sass";
import cn from "classnames";
import Description from "../../components/UI/Description/Description";
import Title from "../../components/UI/Title/Title";
import Filters from "../../components/Filters/Filters";
import { IProject, projects } from "../../data";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/UI/Button/Button";

function ProjectsPage() {
	return (
		<MainLayout title="Проекты Алексея Яковлева">
			<article className={cn(classes.wrapper, "container")}>
				<header className={classes.header}>
					<Title type="H1" className={classes.title}>Моя работа</Title>
					<Description type="MIDDLE" className={classes.description}>
						Здесь Вы увидите несколько проектов, над которыми я
						работал или работаю до сих пор.
					</Description>
				</header>
				<section className={classes.projects}>
					<ul className={classes.list}>
						{projects.map((project: IProject) => {
							return (
								<li key={project.link} className={classes.listItem}>
									<header className={classes.listItemHeader}>
										<Image
											src={project.images[0]}
											alt={project.name}
										/>
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
											<Link href={`/projects/${project.name}`}>Узнать больше</Link>
										</Button>
									</footer>
								</li>
							);
						})}
					</ul>
					<Filters />
				</section>
			</article>
		</MainLayout>
	);
}

export default ProjectsPage;
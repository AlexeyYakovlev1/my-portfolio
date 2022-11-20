"use client";

import classes from "./Technology.module.sass";

import Link from "next/link";
import Image from "next/image";
import { ITechnology, technology } from "../../data";
import Title from "../UI/Title/Title";

const Technology = (): JSX.Element => {
	return (
		<section className={classes.technology}>
			<header className="container">
				<Title
					type="H2"
					className={classes.title}
				>
					Технологии, которые я использую
				</Title>
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
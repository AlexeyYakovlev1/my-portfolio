"use client";

import Link from "next/link";
import classes from "./Welcome.module.sass";
import Image from "next/image";
import Button from "../UI/Button/Button";
import Description from "../UI/Description/Description";
import Title from "../UI/Title/Title";

function Welcome() {
	return (
		<article className={classes.wrapper}>
			<header className={classes.header}>
				<Title type="H1" className={classes.title}>
					Алексей Яковлев
				</Title>
				<Description type="MIDDLE">
					Front-end разработчик.
					Занимаюсь внешней, клиентской частью сайтов и веб-приложений.
					Отвечаю за корректную работу элементов интерфейса.
				</Description>
			</header>
			<div className={classes.actions}>
				<Button className={classes.button}>
					<Link href="https://github.com/AlexeyYakovlev1">
						<Image
							src="/assets/images/github.svg"
							height="32"
							width="32"
							alt="github"
						/>
						Смотреть профиль на Github
					</Link>
				</Button>
			</div>
		</article>
	);
}

export default Welcome;
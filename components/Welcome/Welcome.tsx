"use client";

import Link from "next/link";
import classes from "./Welcome.module.sass";
import Image from "next/image";
import Button from "../UI/Button/Button";

function Welcome() {
	return (
		<article className={classes.wrapper}>
			<header className={classes.header}>
				<h1 className={classes.title}>
					Алексей Яковлев
				</h1>
				<p className={classes.description}>
					Front-end разработчик.
					Занимаюсь внешней, клиентской частью сайтов и веб-приложений.
					Отвечаю за корректную работу элементов интерфейса.
				</p>
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
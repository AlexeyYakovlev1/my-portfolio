"use client";

import Link from "next/link";
import classes from "./Footer.module.sass";
import Image from "next/image";
import { ISocialNetwork, socialNetworks } from "../../data";
import Title from "../UI/Title/Title";
import Description from "../UI/Description/Description";

const Footer = (): JSX.Element => {
	return (
		<footer className={classes.wrapper}>
			<article className="container">
				<section className={classes.socialNetworks}>
					<Title type="H3">Найти меня можно тут</Title>
					<ul className={classes.networks}>
						{socialNetworks.map((network: ISocialNetwork) => {
							return (
								<li
									key={network.name}
								>
									<Link href={network.link} title={network.name}>
										<Image
											src={network.img}
											alt={network.name}
											width={32}
											height={32}
										/>
									</Link>
								</li>
							);
						})}
					</ul>
				</section>
			</article>
			<div className={classes.down}>
				<Description type="SMALL">
					© 2022 Алексей Яковлев
				</Description>
				<Description type="SMALL">
					<Link href="https://github.com/AlexeyYakovlev1/my-portfolio">
						Исходный код проекта
					</Link>
				</Description>
			</div>
		</footer>
	);
};

export default Footer;
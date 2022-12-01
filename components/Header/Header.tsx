"use client";

import Link from "next/link";
import React from "react";
import classes from "./Header.module.sass";
import cn from "classnames";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { IState } from "../../models/redux/state.models";

interface IMenu {
	text: string;
	link: string;
	img?: any;
}

const Header = (): JSX.Element => {
	const { auth } = useSelector((state: IState) => state.admin);
	const menu: Array<IMenu> = [
		{
			text: "Главная",
			link: "/"
		},
		{
			text: "Проекты",
			link: "/projects"
		}
	];

	const path = usePathname();

	return (
		<header className={classes.wrapper}>
			<nav className="container">
				<ul className={classes.list}>
					{menu.map((item: IMenu) => {
						return (
							<li
								className={cn({
									[classes.active]: item.link === path
								})}
								key={item.link}
							>
								<Link href={item.link}>{item.text}</Link>
							</li>
						);
					})}
					{auth && <li className={cn({
						[classes.active]: "/admin/workplace" === path
					})}>
						<Link href="/admin/workplace">
							Администратор
						</Link>
					</li>}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
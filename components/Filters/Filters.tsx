"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";
import classes from "./Filters.module.sass";
import cn from "classnames";

interface IFiltersProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> { }

const Filters = ({ className }: IFiltersProps): JSX.Element => {
	return (
		<aside className={cn(classes.filters, className)}>
			<Title type="H2">Фильтры</Title>
			<form className={classes.form}>
				<section className={classes.filtersItem}>
					<header className={classes.filtersHeader}>
						<Title type="H3">Технология</Title>
					</header>
					<ul className={classes.filtersItemContent}>
						<li>
							<label htmlFor="ts">Typescript</label>
							<input id="ts" type="checkbox" />
						</li>
						<li>
							<label htmlFor="react">React</label>
							<input id="react" type="checkbox" />
						</li>
						<li>
							<label htmlFor="redux">Redux</label>
							<input id="redux" type="checkbox" />
						</li>
						<li>
							<label htmlFor="nextjs">Next.js</label>
							<input id="nextjs" type="checkbox" />
						</li>
						<li>
							<label htmlFor="nodejs">Node.js</label>
							<input id="nodejs" type="checkbox" />
						</li>
						<li>
							<label htmlFor="postgresql">PostgreSQL</label>
							<input id="postgresql" type="checkbox" />
						</li>
						<li>
							<label htmlFor="mongodb">MongoDB</label>
							<input id="mongodb" type="checkbox" />
						</li>
					</ul>
				</section>
				<section className={classes.filtersItem}>
					<header className={classes.filtersHeader}>
						<Title type="H3">Тип</Title>
					</header>
					<ul className={classes.filtersItemContent}>
						<li>
							<label htmlFor="blog">Блог</label>
							<input id="blog" type="checkbox" />
						</li>
						<li>
							<label htmlFor="music">Музыка</label>
							<input id="music" type="checkbox" />
						</li>
						<li>
							<label htmlFor="shop">Магазин</label>
							<input id="shop" type="checkbox" />
						</li>
						<li>
							<label htmlFor="video">Видеохостинг</label>
							<input id="video" type="checkbox" />
						</li>
						<li>
							<label htmlFor="todo">Todo</label>
							<input id="todo" type="checkbox" />
						</li>
					</ul>
				</section>
				<section className={classes.filtersItem}>
					<header className={classes.filtersHeader}>
						<Title type="H3">Сложность</Title>
					</header>
					<ul className={classes.filtersItemContent}>
						<li>
							<label htmlFor="easy">Легко</label>
							<input id="easy" type="checkbox" />
						</li>
						<li>
							<label htmlFor="hard">Трудно</label>
							<input id="hard" type="checkbox" />
						</li>
					</ul>
				</section>
				<Button>Применить</Button>
			</form>
		</aside>
	);
};

export default Filters;
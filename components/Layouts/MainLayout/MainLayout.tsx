"use client";

import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../models/redux/state.models";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Alert from "../../UI/Alert/Alert";
import classes from "./MainLayout.module.sass";

interface IMainLayoutProps {
	children: React.ReactNode;
	title?: string;
}

const MainLayout = ({ children, title = "Портфолио - Алексей Яковлев" }: IMainLayoutProps): JSX.Element => {
	const { text } = useSelector((state: IState) => state.alert);

	return (
		<React.Fragment>
			<Head>
				<meta
					name="keywords"
					content="portfolio, programming, javascript, description, about"
				/>
				<meta
					name="description"
					content="portfolio about Alexey Yakovlev and his projects"
				/>
				<meta charSet="UTF-8" />
				<title>{title}</title>
			</Head>
			<div className={classes.wrapper}>
				{text && <Alert />}
				<Header />
				<main className={classes.body}>{children}</main>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default MainLayout;
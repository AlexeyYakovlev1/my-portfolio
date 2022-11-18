"use client";

import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classes from "./Title.module.sass";
import cn from "classnames";

interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	children: React.ReactNode;
	type: "H1" | "H2" | "H3";
}

function Title({ children, className, type, ...props }: ITitleProps): JSX.Element {
	if (type === "H1") {
		return (
			<h1
				className={cn(classes.title, className, classes.h1)}
				{...props}
			>
				{children}
			</h1>
		);
	} else if (type === "H2") {
		return (
			<h2
				className={cn(classes.title, className, classes.h2)}
				{...props}
			>
				{children}
			</h2>
		);
	}

	return (
		<h3
			className={cn(classes.title, className, classes.h3)}
			{...props}
		>
			{children}
		</h3>
	);
}

export default Title;
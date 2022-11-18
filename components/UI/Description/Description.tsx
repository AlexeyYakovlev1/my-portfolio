"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import classes from "./Description.module.sass";

interface IDescriptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: React.ReactNode;
	type?: "SMALL" | "MIDDLE" | "BIG";
}

function Description({ children, className, type, ...props }: IDescriptionProps) {
	return (
		<p
			className={cn(classes.description, className, {
				[classes.small]: type === "SMALL",
				[classes.middle]: type === "MIDDLE",
				[classes.big]: type === "BIG"
			})}
			{...props}
		>
			{children}
		</p>
	);
}

export default Description;
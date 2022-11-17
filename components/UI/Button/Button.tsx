"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";
import classes from "./Button.module.sass";
import cn from "classnames";

interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: React.ReactNode;
}

function Button({ children, className, ...props }: IButtonProps) {
	return (
		<button
			className={cn(classes.wrapper, className)}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
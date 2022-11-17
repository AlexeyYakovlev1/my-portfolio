import Link from "next/link";
import classes from "./Footer.module.sass";

function Footer() {
	return (
		<footer className={classes.wrapper}>
			<div className="container">
				<p className={classes.text}>
					Проект разработал&nbsp;
					<Link href="https://github.com/AlexeyYakovlev1">Алексей Яковлев</Link>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
import MainLayout from "../../../components/Layouts/MainLayout/MainLayout";
import Title from "../../../components/UI/Title/Title";
import classes from "./WorkPlace.module.sass";
import cn from "classnames";

const WorkPlace = (): JSX.Element => {
	return (
		<MainLayout title="Страница администратора">
			<article className={cn(classes.wrapper, "container")}>
				<Title type="H1">Admin page</Title>
			</article>
		</MainLayout>
	);
};

export default WorkPlace;
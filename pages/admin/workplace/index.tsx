import { IState } from "../../../models/redux/state.models";
import { useSelector } from "react-redux";
import AdminLayout from "../../../components/Layouts/AdminLayout/AdminLayout";
import Title from "../../../components/UI/Title/Title";
import classes from "./WorkPlace.module.sass";
import Description from "../../../components/UI/Description/Description";

const WorkPlace = (): JSX.Element => {
	const { admin } = useSelector((state: IState) => state.admin);

	return (
		<AdminLayout>
			<article className={classes.wrapper}>
				<Title
					className={classes.title}
					type="H1"
				>
					Панель администратора
				</Title>
				<Description
					className={classes.description}
					type="BIG"
				>
					Добро пожаловать, {admin.name}
				</Description>
			</article>
		</AdminLayout>
	);
};

export default WorkPlace;
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../models/redux/state.models";
import classes from "./Alert.module.sass";
import cn from "classnames";
import { setAlert } from "../../../redux/actions/alert.actions";

const Alert = (): JSX.Element => {
	const { type, text } = useSelector((state: IState) => state.alert);
	const dispatch = useDispatch();

	const closeHandler = () => {
		dispatch(setAlert({ type, text: "" }));
	};

	return (
		<div
			className={cn(classes.wrapper, {
				[classes.success]: type === "SUCCESS",
				[classes.error]: type === "ERROR",
				[classes.warning]: type === "WARNING"
			})}
		>
			<p className={classes.text}>{text}</p>
			<span
				onClick={closeHandler}
				className={classes.close}
			>
				&#x2573;
			</span>
		</div>
	);
};

export default Alert;
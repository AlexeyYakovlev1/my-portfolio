import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../models/redux/state.models";
import { setAlert } from "../redux/actions/alert.actions";

const useAdminCheck = () => {
	const { auth } = useSelector((state: IState) => state.admin);
	const router = useRouter();
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!auth) {
			dispatch(setAlert({
				type: "WARNING",
				text: "Нет доступа"
			}));
			router?.push("/");
		}
	}, [auth]);
};

export default useAdminCheck;
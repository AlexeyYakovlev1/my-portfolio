"use client";

import React from "react";
import MainLayout from "../../../components/Layouts/MainLayout/MainLayout";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import Title from "../../../components/UI/Title/Title";
import { IAdmin } from "../../../models/admin/admin.model";
import classes from "./Login.module.sass";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../redux/actions/alert.actions";
import { useRouter } from "next/router";

const Admin = (): JSX.Element => {
	const [adminInfo, setAdminInfo] = React.useState<IAdmin>({
		name: "",
		email: "",
		password: "",
		id: -1,
		roles: []
	});
	const dispatch = useDispatch();
	const router = useRouter();

	const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		axios.post("/api/admin/login", adminInfo)
			.then((response) => {
				const { success, token, error, message } = response.data;

				if (!success) {
					dispatch(setAlert({
						type: "ERROR",
						text: message || error
					}));
					return;
				}

				Cookies.set("token", token);
				router.push("/admin/workplace");
			})
			.catch((error) => {
				dispatch(setAlert({
					type: "ERROR",
					text: error
				}));
			});
	};

	return (
		<MainLayout title="Вход">
			<article className={classes.wrapper}>
				<Title type="H2">С возвращением!</Title>
				<form onSubmit={loginSubmit} className={classes.form}>
					<Input
						type="email"
						placeholder="Электронная почта"
						value={adminInfo.email}
						onChange={(event) => setAdminInfo({ ...adminInfo, email: event.target.value })}
					/>
					<Input
						type="password"
						placeholder="Пароль"
						value={adminInfo.password}
						onChange={(event) => setAdminInfo({ ...adminInfo, password: event.target.value })}
					/>
					<Button>Войти</Button>
				</form>
			</article>
		</MainLayout>
	);
};

export default Admin;
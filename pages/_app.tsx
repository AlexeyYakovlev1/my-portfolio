import "../styles/_global.sass";
import type { AppProps } from "next/app";
import React from "react";
import Cookies from "js-cookie";
import { Provider } from "react-redux";
import { wrapper, store } from "../redux/store";
import { useDispatch } from "react-redux";
import { setAdmin } from "../redux/actions/admin.actions";
import { setAlert } from "../redux/actions/alert.actions";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const dispatch = useDispatch();

	// При запуске - проверка на администратора
	React.useEffect(() => {
		const checkAdmin = async () => {
			const response = await fetch("/api/admin/check?forget=true", {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${Cookies.get("token") || ""}`
				}
			});

			const data = await response.json();
			const { success, token, admin, error, message, forget } = data;

			if (!success) {
				if (!forget) {
					dispatch(setAlert({
						type: "ERROR",
						text: message || error
					}));
				}
				return;
			}

			if (success && !forget) {
				Cookies.set("token", token);
				dispatch(setAdmin(admin));
			}
		};

		checkAdmin();
	}, []);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default wrapper.withRedux(App);
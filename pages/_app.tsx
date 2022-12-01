import "../styles/_global.sass";
import type { AppProps } from "next/app";
import React from "react";
import AlertContext from "../context/alert.context";
import Cookies from "js-cookie";
import { Provider } from "react-redux";
import { wrapper, store } from "../redux/store";
import { useDispatch } from "react-redux";
import { setAdmin } from "../redux/actions/admin.actions";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const [text, setText] = React.useState<string>("");
	const dispatch = useDispatch();

	// При запуске - проверка на администратора
	React.useEffect(() => {
		const checkAdmin = async () => {
			const response = await fetch("/api/admin/check", {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${Cookies.get("token") || ""}`
				}
			});

			const data = await response.json();
			const { success, token, admin, error, message } = data;

			if (!success) {
				alert(message || error);
				return;
			}

			Cookies.set("token", token);
			dispatch(setAdmin(admin));
		};

		checkAdmin();
	}, []);

	return (
		<Provider store={store}>
			<AlertContext.Provider value={{ text, setText }}>
				<Component {...pageProps} />
			</AlertContext.Provider>
		</Provider>
	);
};

export default wrapper.withRedux(App);
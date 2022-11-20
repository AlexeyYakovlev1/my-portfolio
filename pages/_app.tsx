import "../styles/_global.sass";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return <Component {...pageProps} />;
};

export default App;
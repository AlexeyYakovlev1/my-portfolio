"use client";

import MainLayout from "../components/Layouts/MainLayout/MainLayout";
import Technology from "../components/Technology/Technology";
import Welcome from "../components/Welcome/Welcome";

const HomePage = (): JSX.Element => {
	return (
		<MainLayout>
			<article>
				<header className="container">
					<Welcome />
				</header>
				<Technology />
			</article>
		</MainLayout>
	);
};

export default HomePage;
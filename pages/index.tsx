"use client";

import MainLayout from "../components/Layouts/MainLayout/MainLayout";
import Technology from "../components/Technology/Technology";
import Welcome from "../components/Welcome/Welcome";

function Home() {
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
}

export default Home;
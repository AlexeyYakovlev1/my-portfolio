import { usePathname } from "next/navigation";
import useAdminCheck from "../../../hooks/useAdminCheck";
import MainLayout from "../MainLayout/MainLayout";
import classes from "./AdminLayout.module.sass";
import cn from "classnames";

interface IAdminLayoutProps {
	children: React.ReactNode;
}

const AdminLayout = ({ children }: IAdminLayoutProps): JSX.Element => {
	useAdminCheck();
	const path = usePathname();
	const navList = [
		{
			name: "Проекты",
			link: "/admin/projects"
		},
		{
			name: "Технологии",
			link: "/admin/techs"
		},
		{
			name: "Персонализация",
			link: "/admin/settings"
		}
	];

	return (
		<MainLayout title="Администратор">
			<article className={cn(classes.wrapper, "container")}>
				<div className={classes.left}>
					<nav className={classes.nav}>
						{navList.map((item) => (
							<a
								key={item.link}
								className={cn({
									[classes.active]: path === item.link
								})}
								href={item.link}
							>
								{item.name}
							</a>
						))}
					</nav>
				</div>
				<div className={classes.content}>{children}</div>
			</article>
		</MainLayout>
	);
};

export default AdminLayout;
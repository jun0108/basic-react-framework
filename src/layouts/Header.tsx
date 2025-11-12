import { Header, HeaderLogo, HeaderList, HeaderItem } from "~/styles/layout/Header";
import router from "~/shared/route"; 

const MainHeader = () => {
	const menuList = [
		{ path: "/todo", title: "TODO" },
		{ path: "/examples", title: "EXAMPLE" },
	];

	return (
		<Header>
			<HeaderLogo onClick={() => router.navigate("/")}>
				React Basic Framework
			</HeaderLogo>
			<HeaderList>
				{menuList.map(({ path, title }) => (
					<HeaderItem key={`menu-list-${path}`} onClick={() => router.navigate(path)}>
						<span>{title}</span>
					</HeaderItem>
				))}
			</HeaderList>
		</Header>
	);
};

export default MainHeader;
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();

	const menuList = [
		{ path: "todo", title: 'TODO' },
		{ path: "examples", title: 'EXAMPLE' },
	];
	return (
		<header className="header">
			<h1 onClick={() => navigate('')} className="header__logo">React Basic Framework</h1>
			<ul className="header__menu">
				{menuList.map(({ path, title }) => (
					<li key={`menu-list-${path}`} onClick={() => navigate(path)}>
						<span>{title}</span>
					</li>
				))}
			</ul>
		</header>
	)
}

export default Header
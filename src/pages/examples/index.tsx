import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Example() {
	const navigate = useNavigate();
	const menuList = [
		{ path: "button", title: 'buttons' },
	];
	return (
		<div>
			<h1 className="page__title">UI EXAMPLE</h1>
			<ul style={{width: '200px'}}>
				{menuList.map(({ path, title }) => (
					<li key={path} onClick={() => navigate(path)} className="chip__line--primary-lg">
						<span>{title}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Example

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import './styles/main.scss'
import Button from'./pages/examples/Button'
import Todo from'./pages/TodoList'

function App() {
	const exampleRoutes = [
		{ path: "button", component: Button },
	];
	return (
		<BrowserRouter>
			<div className="main">
				<header className="header">
					<h1>React Basic Framework</h1>
				</header>
				<div className="main__content">
					<Routes>
						{exampleRoutes.map(({ path, component: Component }) => (
							<Route key={path} path={`examples/${path}`} element={<Component />} />
						))}
						<Route path="todo" element={<Todo/>}/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App

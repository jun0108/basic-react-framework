import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import './styles/main.scss'
import Header from'./layouts/Header'
import Example from'./pages/examples/index'
import Button from'./pages/examples/Button'
import Todo from'./pages/TodoList'

function App() {
	const exampleRoutes = [
		{ path: "", component: Example },
		{ path: "button", component: Button },
	];
	return (
		<BrowserRouter>
			<div className="main">
				<Header/>
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

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import './styles/main.scss'
import Todo from'./pages/TodoList'

function App() {

	return (
		<BrowserRouter>
			<div className="main">
				<header className="header">
					<h1>React Basic Framework</h1>
				</header>
				<div className="main__content">
					<Routes>
						<Route path="todo" element={<Todo/>}/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App

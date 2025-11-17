import { createBrowserRouter } from "react-router"

import Example from '~/pages/examples/index'
import Button from '~/pages/examples/Button'
import Textfield from '~/pages/examples/Textfield'
import Todo from '~/pages/todo/TodoList'
import Home from "~/pages"

const router = createBrowserRouter([
	{
		path: '/',
		Component: Home
	},
	{
		path: '/todo',
		Component: Todo
	},
	{
		path: '/examples',
		Component: Example
	},
	{
		path: '/examples/button',
		Component: Button
	},
	{
		path: '/examples/textfield',
		Component: Textfield
	},
])

export default router
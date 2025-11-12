import { createBrowserRouter } from "react-router"

import Example from'~/pages/examples/index'
import Button from'~/pages/examples/Button'
import Todo from '~/pages/todo/TodoList'

const router = createBrowserRouter([
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
])

export default router
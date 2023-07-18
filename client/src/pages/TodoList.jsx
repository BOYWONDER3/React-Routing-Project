import { useLoaderData } from "react-router-dom"
import { getTodos } from "../api/todos"

function TodoList() {
    const todos = useLoaderData()

    return <>
        <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map(todos => (
            <li key={todos.id} className={todos.completed ? 'strike-through' : undefined}>{todos.title}</li>
        ))}
      </ul>
    </>
}

function loader({ request: { signal }}) {
    return getTodos({ signal })
}

export const TodoListRouter = {
    loader,
    element: <TodoList /> 
}
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: 'posts', element: <PostList /> },
            { path: 'users', element: <UserList /> },
            { path: 'todos', element: <TodoList /> },
        ]
    }
])
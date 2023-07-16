import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { PostListRoute } from "./pages/PostList";
import { userListRoute } from "./pages/UserList";
import { TodoList } from "./pages/TodoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: "posts",
        children: [
          {
            index: true,
           ...PostListRoute,
          },
          { path: ":postId", element: <h1>Hi</h1> },
        ],
      },
      { path: "users", ...userListRoute },
      { path: "todos", element: <TodoList /> },
    ],
  },
]);

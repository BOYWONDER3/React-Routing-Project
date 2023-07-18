import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { PostListRoute } from "./pages/PostList";
import { userListRoute } from "./pages/UserList";
import { TodoListRouter } from "./pages/TodoList";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";

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
          { path: ":postId", ...postRoute },
        ],
      },
      { path: "users", children: [
        {index: true, ...userListRoute},
        { path: ":userId", ...userRoute }
      ] },
      { path: "todos", ...TodoListRouter },
    ],
  },
]);

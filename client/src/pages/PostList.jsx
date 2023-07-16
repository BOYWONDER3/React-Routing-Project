import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      <h1 class="page-title">Posts</h1>
      <div class="card-grid">
        {posts.map((post) => (
          <div class="card">
            <div class="card-header">{post.title}</div>
            <div class="card-body">
              <div class="card-preview-text">{post.body}</div>
            </div>
            <div class="card-footer">
              <Link class="btn" to={`/posts/${post.id}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return axios
    .get("http://localhost:3000/posts", { signal })
    .then((res) => res.data);
}

export const PostListRoute = {
  loader,
  element: <PostList />,
};

import { useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts.js";
import { PostCard } from "../components/PostCard";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      <h1 class="page-title">Posts</h1>
      <div class="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getPosts({ signal });
}

export const PostListRoute = {
  loader,
  element: <PostList />,
};

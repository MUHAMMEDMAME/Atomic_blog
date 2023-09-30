import { useContext } from "react";

function PostsList({PostContext}) {
  const { posts } = useContext(PostContext);
  return <ul>
    {posts.map(post =>
      <>
      <li key={post.title}>
        <h3>{post.title}</h3>
        <p>{post.body }</p>
  </li>
      </>
  )}
  </ul>
}
export default PostsList;
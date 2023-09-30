import { useContext } from "react";

function PostsFound({PostContext}) {
  const { posts } = useContext(PostContext);
  return <p>
    <span role='img'>🚀</span>
    {posts.length } atomic posts found
  </p>
}
export default PostsFound;
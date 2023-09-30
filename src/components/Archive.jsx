import { useContext, useState } from "react";
import {  faker } from '@faker-js/faker';
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body:`${faker.hacker.phrase()}`
  }
}

function Archive({PostContext}) {
  const { onAddPost } = useContext(PostContext);
  const [isArchived, setIsArchived] = useState(false);
  const [posts] = useState(() =>
    Array.from({ length: 40 }, () =>
      createRandomPost()
    )
  )
  
  return <div>
    <h2>post archive</h2>
    <button onClick={()=>setIsArchived(!isArchived)}>{`${isArchived?'Hide Archive post':'Show Archive post'}`}</button>
    <aside>
      { isArchived&&

        <ul>
    {posts.map(post =>
      <>
      <li key={post.title}>
          <p>
        <strong>{post.title}:</strong>
            {post.body}
          </p>
          <button onClick={()=>onAddPost(post)}>Add as post</button>
  </li>
      </>
  )}
  </ul>
}
    </aside>
  </div>
}
export default Archive;
import { createContext, useState } from "react";
import {  faker } from '@faker-js/faker';

const PostContext = createContext('');

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body:`${faker.hacker.phrase()}`
  }
}

function PostProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () =>
      createRandomPost()
    )
  )


    //functions places
    const searchedPost = searchQuery.length > 0 ?
    posts.filter(post =>
    
      `${post.title} ${post.body}`.toLowerCase().
        includes(searchQuery.toLowerCase())
    )
    :
    posts;
  
   function handleClearPost() {
    setPosts([]);
  }

  function handleAddPost(post) {

    setPosts([post, ...posts]);
  }

  return (
    <PostContext.Provider value={{
      posts: searchedPost,
      onAddPost: handleAddPost,
      searchQuery,
      setSearchQuery,
      onClearPosts:handleClearPost,
      
    } }>
      {children}
    </PostContext.Provider>
  )
}

export { PostProvider,PostContext }

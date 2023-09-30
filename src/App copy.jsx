import {  faker } from '@faker-js/faker';
import { createContext, useContext, useEffect, useState } from 'react';

import Logo from './components/Logo';
import PostsFound from './components/PostsFound';
import Search from './components/Search';
import FormAddPost from './components/FormAddPost';
import PostsList from './components/PostsList';
import Archive from './components/Archive';

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body:`${faker.hacker.phrase()}`
  }
}

const PostContex = createContext('');

function App() {

  const [isFakeDark, setIsFakeDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () =>
      createRandomPost()
    )
  )
  useEffect(function () {
    document.documentElement.classList.toggle('fake-dark-mode');
    
  }, [isFakeDark])
  
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
    <section>
      <PostContex.Provider value={
        {
          posts: searchedPost,
          onAddPost: handleAddPost,
          searchQuery,
          setSearchQuery,

        }
      }>

      <button
        className='btn-fake-dark-mode'
        onClick={() => setIsFakeDark(!isFakeDark)}
        >
        {`${isFakeDark ?'🌚':'🌞'}`}</button>

      <Header>
        <Logo />
        <div>
          <PostsFound PostContex={PostContex} />
          <Search  PostContex={PostContex} />
          <button onClick={handleClearPost}>clear posts</button>
        </div>
      </Header>

      <Main>
        <FormAddPost PostContex={PostContex} />
        <PostsList PostContex={PostContex}  />
      </Main>


      <Archive PostContex={PostContex}/>

        </PostContex.Provider>
   </section>
  )
}
// stuff about Header
function Header({children}) {
 return  <header>
{children}
  </header>
}






//stuff about main

function Main({children}) {
  return <main>
{children}
  </main>
}






export default App

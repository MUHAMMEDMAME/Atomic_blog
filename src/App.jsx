
import { useContext, useEffect, useState } from 'react';
import { PostProvider,PostContext } from './PostProvider';

import Logo from './components/Logo';
import PostsFound from './components/PostsFound';
import Search from './components/Search';
import FormAddPost from './components/FormAddPost';
import PostsList from './components/PostsList';
import Archive from './components/Archive';
import Button from './components/Button';





function App() {
  

  const [isFakeDark, setIsFakeDark] = useState(false);
 
  useEffect(function () {
    document.documentElement.classList.toggle('fake-dark-mode');
    
  }, [isFakeDark])
  

  return (
    <section>
      <PostProvider>
        
        <>

      <button
        className='btn-fake-dark-mode'
        onClick={() => setIsFakeDark(!isFakeDark)}
        >
        {`${isFakeDark ?'🌚':'🌞'}`}</button>

      <Header>
        <Logo />
        <div>
          <PostsFound PostContext={PostContext} />
              <Search PostContext={PostContext} />
              <Button PostContext={PostContext} >clear Posts</Button>
          
        </div>
      </Header>

      <Main>
        <FormAddPost PostContext={PostContext} />
        <PostsList PostContext={PostContext}  />
      </Main>


      <Archive PostContext={PostContext}/>

        </>
        </PostProvider>
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

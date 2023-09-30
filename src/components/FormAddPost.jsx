import { useContext, useState } from "react";

function FormAddPost({PostContext}) {
  const { onAddPost } = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  
  
  return <form onSubmit={(e) => {
    e.preventDefault();
    if(!title||!body) return
    onAddPost({ title, body });
    setBody('');
    setTitle('');
  }}>
    <input
      placeholder='post title'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
    />

    <textarea
      placeholder='post body'
      value={body}
      onChange={(e)=>setBody(e.target.value)}
    />
    <button>Add post</button>
  </form>
}
export default FormAddPost;
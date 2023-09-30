import { useContext } from "react"

function Button({PostContext,children}) {
  const { onClearPosts } = useContext(PostContext);
  return (
    <button onClick={onClearPosts}>
      {children}
   </button>
  )
}

export default Button

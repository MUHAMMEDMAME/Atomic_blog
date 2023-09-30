import { useContext } from "react";

function Search({PostContext}) {
  const { searchQuery, setSearchQuery } = useContext(PostContext);
  return <input
    placeholder='Search posts...'
    value={searchQuery}
    onChange={(e)=>setSearchQuery(e.target.value)}
  />
}
export default Search;
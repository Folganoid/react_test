import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'jjjj'},
    {id: 2, title: 'TS', body: 'ttt'},
    {id: 3, title: 'Go', body: 'gogogo'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length !== 0 
        ? <PostList remove={removePost} posts={posts} title="Post List #1"/> 
        : <h2>Empty</h2>}
      
    </div>
  );
}

export default App;

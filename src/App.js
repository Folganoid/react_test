import { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'jjjj'},
    {id: 2, title: 'TS', body: 'ttt'},
    {id: 3, title: 'Go', body: 'gogogo'}
  ])

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body
    }
    setPosts([...posts, newPost])
    setPost({title: '', body: ''});
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          type="text"
          placeholder="post name"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput
          value={post.body}
          type="text"
          placeholder="post desc"
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost}>Add post</MyButton>
      </form>
      <PostList posts={posts} title="Post List #1"/>
    </div>
  );
}

export default App;

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

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('');
    setBody('');

  }

  return (
    <div className="App">
      <form>
        <MyInput 
          type="text"
          placeholder="post name"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <MyInput
          value={body}
          type="text"
          placeholder="post desc"
          onChange={e => setBody(e.target.value)}
        />
        <MyButton onClick={addNewPost}>Add post</MyButton>
      </form>
      <PostList posts={posts} title="Post List #1"/>
    </div>
  );
}

export default App;

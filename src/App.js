import { useState } from "react";
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

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="post name" />
        <MyInput type="text" placeholder="post desc" />
        <MyButton disabled>Add post</MyButton>
      </form>
      <PostList posts={posts} title="Post List #1"/>
    </div>
  );
}

export default App;

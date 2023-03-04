import { useState } from "react";
import PostList from "./components/PostList";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'jjjj'},
    {id: 2, title: 'TS', body: 'ttt'},
    {id: 3, title: 'Go', body: 'gogogo'}
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'JS2', body: 'jjjj2'},
    {id: 2, title: 'TS2', body: 'ttt2'},
    {id: 3, title: 'Go2', body: 'gogogo2'}
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="Post List #1"/>
      <PostList posts={posts2} title="Post List #2"/>
    </div>
  );
}

export default App;

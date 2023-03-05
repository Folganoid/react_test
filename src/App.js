import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'jjjj'},
    {id: 2, title: 'TS', body: 'aaa'},
    {id: 3, title: 'Go', body: 'gogogo'}
  ])

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts.sort((a, b) => a[sort].localeCompare(b[sort]))]);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <div style={{alignSelf: 'start' }}>
        <MySelect
          defaultValue="Sort by"
          value={selectedSort}
          onChange={sortPosts}
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By desc'}
          ]}
        />
      </div>
      {posts.length !== 0 
        ? <PostList remove={removePost} posts={posts} title="Post List #1"/> 
        : <h2>Empty</h2>}
      
    </div>
  );
}

export default App;

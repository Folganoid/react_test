import { useEffect, useState } from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  useEffect(() => {
    fetchPosts();
  }, [])


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id));
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{alignSelf: 'start'}} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: "15px 0"}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError && <h1>Error...</h1> }
      {isPostsLoading 
        ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post List #1"/> 
      }
      
    </div>
  );
}

export default App;

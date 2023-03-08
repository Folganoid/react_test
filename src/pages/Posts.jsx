import { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import Pagination from "../components/UI/pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePosts";
import { getPageCount } from "../utils/pages";

function Posts() {

  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit])


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
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
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue = 'limit'
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'all'},
        ]}
      />
      {postError && <h1>Error...</h1> }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post List #1"/> 
      <div ref={lastElement} style={{width: '100%', height: 20, backgroundColor: "red"}}></div>
      {isPostsLoading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Loader/></div>}
      
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
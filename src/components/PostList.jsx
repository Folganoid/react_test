import PostItem from './PostItem'

export default function PostList ({posts, title}) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((el, index) => 
        <PostItem number={index} key={el.id} post={el}/>)
      }
    </div>
  )
}

import PostItem from './PostItem'

export default function PostList ({posts, title, remove}) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((el, index) => 
        <PostItem remove={remove} number={index} key={el.id} post={el}/>)
      }
    </div>
  )
}

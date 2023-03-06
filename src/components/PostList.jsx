import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'

export default function PostList ({posts, title, remove}) {

  if (!posts.length) {
    return (
      <h2>Empty</h2>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((el, index) => 
          <CSSTransition
            key={el.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index} post={el}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

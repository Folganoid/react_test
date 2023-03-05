import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

export default function PostForm({create}) {

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''});
  }

  return (
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
  )
}

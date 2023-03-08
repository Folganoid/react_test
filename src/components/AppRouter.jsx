import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'
import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'
import X404 from '../pages/X404'
import Login from './Login'

export default function AppRouter() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
    <Routes>
        {isAuth 
          ? <Route index element={<Navigate to={'/posts'}/>}/>
          : <Route index element={<Navigate to={'/login'}/>}/>
        }
        <Route path='/about' element={<About/>}/>
        {isAuth ? <Route path='/posts' index element={<Posts/>}/> : ''}
        {isAuth ? <Route path='/posts/:id' element={<PostIdPage/>}/> : ''}
        <Route path='/login' element={<Login/>}/>
        <Route path="*" element={<X404 />} />
    </Routes>
  )
}

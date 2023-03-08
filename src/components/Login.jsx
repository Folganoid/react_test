import React, { useContext } from 'react'
import { AuthContext } from '../context'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

export default function Login() {

  const {isAuth, setIsAuth} = useContext(AuthContext);
  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="login"/>
            <MyInput type="password" placeholder="password"/>
            <MyButton>Enter</MyButton>
        </form>
    </div>
  )
}

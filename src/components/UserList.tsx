import React from 'react'
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypeSelector';

const UserList: React.FC = () => {
  const state = useTypedSelector(state => state.user);
  console.log(state);
  return (
    <div>

    </div>
  )
}

export default UserList;

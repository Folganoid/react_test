import React, { useEffect } from 'react'
import { UseActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

const UserList: React.FC = () => {
  const {users, error, loading} = useTypedSelector(state => state.user);
  const {fetchUsers} = UseActions();

  useEffect(() => {
    fetchUsers()
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error...{error}</h1>
  }

  return (
    <div>
      {users.map(user => 
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  )
}

export default UserList;

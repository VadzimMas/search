import {useFetchUsersQuery} from '../../../store/api/userApi'
import UserCard from '../UserCard/UserCard'
import './userList.scss'
import {useSelector} from 'react-redux'
import {GoSync} from 'react-icons/go'
import AddUserCard from '../AddUser/AddUserCard'
import useSortedData from './useSortedData'


function UserList() {
  
  const {data: users = [], error, isLoading} = useFetchUsersQuery()
  const {searchTerm, sortOrder} = useSelector((state) => {
    return {
      searchTerm: state.users.searchTerm,
      sortOrder: state.users.sortOrder,
    }
  })
  const sortedUsers = useSortedData(users, sortOrder)
  
  let userCards
  if (isLoading) {
    userCards = <GoSync className="loading"/>
  } else if (error) {
    userCards = <div>Error fetching users...</div>
  } else {
    userCards = searchTerm
      ? sortedUsers
        .filter((user) => {
          return user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
            || user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        })
        .map((user) => {
          return <UserCard key={user.id} user={user}/>
        })
      : sortedUsers
        .map((user) => {
          return <UserCard key={user.id} user={user}/>
        })
  }
  
  
  return (
    <div className={isLoading ? 'userListLoading' : 'userList'}>
      {!isLoading && <AddUserCard/>}
      {userCards}
    </div>
  )
}


export default UserList
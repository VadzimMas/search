import React from 'react'
import SearchBar from './searchBar/SearchBar'
import UserList from './UserList/UserList'
import './searchUsers.scss'

function SearchUsers() {
  return (
    <div className="searchUsers">
      <div className="backgraund"></div>
      <SearchBar/>
      <UserList/>
    </div>
  )
}

export default SearchUsers
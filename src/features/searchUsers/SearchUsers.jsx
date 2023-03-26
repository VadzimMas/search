import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import UserList from './components/UserList/UserList'
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
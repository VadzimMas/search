import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './searchBar.scss'
import {changeSearchTerm, clearSearchTerm, toggleSort} from '../../store'
import {RiDeleteBack2Fill} from 'react-icons/ri'
import {FaSortAlphaDown, FaSortAlphaUpAlt} from 'react-icons/fa'

function SearchBar() {
  
  const {searchTerm, sortOrder} = useSelector((state) => state.users)
  
  const dispatch = useDispatch()
  
  const handleSearch = (e) => dispatch(changeSearchTerm(e.target.value))
  
  const handleClearSearchTerm = () => dispatch(clearSearchTerm())
  const handleToggleSort = () => dispatch(toggleSort())
  
  return (
    <div className="searchBar">
      {sortOrder
        ? <FaSortAlphaDown className="sort" onClick={handleToggleSort}/>
        : <FaSortAlphaUpAlt className="sort" onClick={handleToggleSort}/>}
      <input className="search-input" type="text" value={searchTerm} onChange={handleSearch}
             placeholder="Search by name..."/>
      <RiDeleteBack2Fill className="clear" onClick={handleClearSearchTerm}/>
    </div>
  )
}

export default SearchBar
import {createBrowserRouter} from 'react-router-dom'
import App from '../components/app/App'
import Error from '../components/error/Error'
import Sidebar from '../components/sidebar/Sidebar'
import SearchUsers from '../components/searchUsers/SearchUsers'
import React from 'react'
import Home from '../components/home/Home'
import CrownClothing from '../components/crownClosing/CrownClothing'
import SomeComponent from '../components/crownClosing/SomeComponent'
import CategoryList from '../components/crownClosing/categoryList/CategoryList'
import Navbar from '../components/crownClosing/navbar/Navbar'
import Shop from '../components/crownClosing/shop/Shop'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'searchUsers',
        element: <SearchUsers/>,
      },
      {
        path: 'crownClothing',
        element: <CrownClothing/>,
        children: [
          {
            index: true,
            element: <CategoryList/>,
          },
          {
            path: 'shop',
            element: <Shop/>,
          },
        ],
      },
    ],
  },
])

export default router
import {createBrowserRouter} from 'react-router-dom'
import App from '../components/app/App'
import Error from '../components/error/Error'
import Sidebar from '../components/sidebar/Sidebar'
import SearchUsers from '../components/searchUsers/SearchUsers'
import React from 'react'
import Home from '../components/home/Home'
import CrownClothing from '../components/crownClosing/CrownClothing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'sidebar',
        element: <Sidebar/>,
      },
      {
        path: 'searchUsers/',
        element: <SearchUsers/>,
      },
      {
        path: 'crownClothing/',
        element: <CrownClothing/>,
      },
    ],
  },
])

export default router
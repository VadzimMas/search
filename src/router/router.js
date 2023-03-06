import {createBrowserRouter} from 'react-router-dom'
import App from '../components/app/App'
import Error from '../components/error/Error'
import SearchUsers from '../components/searchUsers/SearchUsers'
import Home from '../components/home/Home'
import CrownClothing from '../components/crownClosing/CrownClothing'
import CategoryList from '../components/crownClosing/categoryList/CategoryList'
import Shop from '../components/crownClosing/shop/Shop'
import SignIn from '../components/crownClosing/signIn/SignIn'

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
          {
            path: 'sign-in',
            element: <SignIn/>,
          },
        ],
      },
    ],
  },
])

export default router
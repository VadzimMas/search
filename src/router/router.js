import {createBrowserRouter} from 'react-router-dom'
import App from '../app/App'
import Error from '../app/components/error/Error'
import SearchUsers from '../features/searchUsers/SearchUsers'
import Home from '../features/home/Home'
import CrownClothing from '../features/crownClosing/CrownClothing'
import CategoryList from '../features/crownClosing/components/categoryList/CategoryList'
import Shop from '../features/crownClosing/components/shop/Shop'
import Authentication from '../features/crownClosing/components/authentication/Authentication'
import Checkout from '../features/crownClosing/components/checkout/Checkout'

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
            path: 'auth',
            element: <Authentication/>,
          },
          {
            path: 'checkout',
            element: <Checkout/>,
          },
        ],
      },
    ],
  },
])

export default router
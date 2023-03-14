import {createBrowserRouter} from 'react-router-dom'
import App from '../app/App'
import Error from '../app/components/error/Error'
import SearchUsers from '../features/searchUsers/SearchUsers'
import Home from '../features/home/Home'
import CrownClothing from '../features/crownClosing/CrownClothing'
import DirectoryList from '../features/crownClosing/components/directory-list/Directory-list'
import Shop from '../features/crownClosing/components/shop/Shop'
import Authentication from '../features/crownClosing/components/authentication/Authentication'
import Checkout from '../features/crownClosing/components/checkout/Checkout'
import Hats from '../features/crownClosing/components/hats/Hats'
import CategoryPreviewList from '../features/crownClosing/components/category-preview-list/Category-preview-list'
import Category from '../features/crownClosing/components/category/Category'

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
      // Crown Clothing
      {
        path: 'crownClothing',
        element: <CrownClothing/>,
        children: [
          {
            index: true,
            element: <DirectoryList/>,
          },
          {
            path: 'shop',
            element: <Shop/>,
            children: [
              {
                index: true,
                element: <CategoryPreviewList/>,
              },
              {
                path: ':id',
                element: <Category/>,
              },
            ],
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
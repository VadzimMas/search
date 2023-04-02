import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from '../app/App'
import ErrorPage from '../error-page/Error-page'
import SearchUsers from '../features/searchUsers/SearchUsers'
import Home from '../features/home/Home'
import DirectoryList from '../features/crownClosing/components/directory-list/Directory-list'
import Shop from '../features/crownClosing/components/shop/Shop'
import Authentication from '../features/crownClosing/components/authentication/Authentication'
import Checkout from '../features/crownClosing/components/checkout/Checkout'
import ProductsList from '../features/crownClosing/components/shop/products-list/Products-list'
import Category from '../features/crownClosing/components/category/Category'
import Index from '../features/crownClosing/Index'
import Order from '../features/crownClosing/components/checkout/order/Order'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} errorElement={<ErrorPage/>}>
      <Route index element={<Home/>}/>
      <Route path="searchUsers" element={<SearchUsers/>}/>
      <Route path="crownClothing" element={<Index/>}>
        <Route index element={<DirectoryList/>}/>
        <Route path="shop" element={<Shop/>}>
          <Route index element={<ProductsList/>}/>
          <Route path=":id" element={<Category/>}/>
        </Route>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="order" element={<Order/>}/>
      </Route>
    </Route>
  ))

export default router
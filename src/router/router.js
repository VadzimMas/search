import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from '../app/App'
import ErrorPage from '../app/components/error/Error-page'
import SearchUsers from '../features/searchUsers/SearchUsers'
import Home from '../features/home/Home'
import DirectoryList from '../features/crownClosing/components/directory-list/Directory-list'
import Shop from '../features/crownClosing/components/shop/Shop'
import Authentication from '../features/crownClosing/components/authentication/Authentication'
import Checkout from '../features/crownClosing/components/checkout/Checkout'
import ProductsList from '../features/crownClosing/components/shop/products-list/Products-list'
import Category from '../features/crownClosing/components/category/Category'
import Index from '../features/crownClosing/Index'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//         index: true,
//         element: <Home/>,
//       },
//       {
//         path: 'searchUsers',
//         element: <SearchUsers/>,
//       },
//       // Crown Clothing
//       {
//         path: 'crownClothing',
//         element: <CrownClothing/>,
//         children: [
//           {
//             index: true,
//             element: <DirectoryList/>,
//           },
//           {
//             path: 'shop',
//             element: <Shop/>,
//             children: [
//               {
//                 index: true,
//                 element: <ProductsList/>,
//               },
//               {
//                 path: ':id',
//                 element: <Category/>,
//               },
//             ],
//           },
//           {
//             path: 'auth',
//             element: <Authentication/>,
//           },
//           {
//             path: 'checkout',
//             element: <Checkout/>,
//           },
//         ],
//       },
//     ],
//   },
// ])


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
      </Route>
    </Route>
  ))

export default router
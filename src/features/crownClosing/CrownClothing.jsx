import s from './crownClothing.module.scss'
import {Outlet} from 'react-router-dom'
import {Fragment} from 'react'
import Navbar from './components/navbar/Navbar'
import {UserProvider} from './context/user.context'
import {ProductProvider} from './context/product.context'
import {CartProvider} from './context/CartContext'

function CrownClothing() {
  
  return (
    <Fragment>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <Navbar/>
            <div id="detail"><Outlet/></div>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </Fragment>
  )
}


export default CrownClothing

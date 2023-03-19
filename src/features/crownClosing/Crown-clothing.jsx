import {Outlet} from 'react-router-dom'
import {Fragment} from 'react'
import Navbar from './components/navbar/Navbar'
import {UserProvider} from './context/User-context'
import {CategoriesProvider} from './context/Categories-context'
import {CartProvider} from './context/Cart-context'
import {DirectoriesProvider} from './context/Directories-context'
import CrownClothingStyled from './Crown-clothing.styled'

function CrownClothing() {
  
  return (
    <Fragment>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <DirectoriesProvider>
              <CrownClothingStyled>
                <Navbar/>
                <div id="detail"><Outlet/></div>
                {/*<BackgroundColor color=""/>*/}
              </CrownClothingStyled>
            </DirectoriesProvider>
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </Fragment>
  )
}


export default CrownClothing

import {ButtonContainer, Footer, Img, Price, Title} from './Product-card-styled'
import {useContext} from 'react'
import {CartContext} from '../../context/Cart-context'
import ButtonStyled from '../button/Button-styled'
import ProductCardStyled from './Product-card-styled'

function ProductCard({product}) {
  const {name, imageUrl, price} = product
  const {addProductToCart} = useContext(CartContext)
  
  const addToCart = () => {
    addProductToCart(product)
  }
  
  return (
    <ProductCardStyled>
      <Img src={imageUrl} alt={name}/>
      <Footer>
        <Title>{name}</Title>
        <Price>{`$ ${price}`}</Price>
      </Footer>
      <ButtonContainer>
        <ButtonStyled type="button" className="inverted" onClick={addToCart}>Add to cart</ButtonStyled>
      </ButtonContainer>
    </ProductCardStyled>
  
  )
}

export default ProductCard


import ProductCardStyled, {ButtonContainer, Footer, Img, Price, Title} from './Product-card-styled'
import {useContext} from 'react'
import {CartContext} from '../../context/Cart-context'
import {BaseButton} from '../button/Button.styled'

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
        <BaseButton type="button" className="inverted" onClick={addToCart}>Add to cart</BaseButton>
      </ButtonContainer>
    </ProductCardStyled>
  
  )
}

export default ProductCard


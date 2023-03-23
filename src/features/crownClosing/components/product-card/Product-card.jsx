import ProductCardStyled, {ButtonContainer, Footer, Img, Price, Title} from './Product-card-styled'
import {BaseButton} from '../button/Button.styled'
import {useDispatch} from 'react-redux'
import {addProductToCart} from '../../redux/store'

function ProductCard({product}) {
  const {name, imageUrl, price} = product
  const dispatch = useDispatch()
  const addToCart = () => dispatch(addProductToCart(product))
  
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


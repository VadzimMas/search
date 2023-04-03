import {useFetchCartQuery} from '../../../store/api/cart.api'
import OrderItem from './order-item/Order-item'
import LoadingSpinner from '../../loading-spiner/Loading-spinner'
import s from './order.module.scss'
import {useFetchUserQuery} from '../../../store/api/user.api'
import {faker} from '@faker-js/faker'
import {FaCrown} from 'react-icons/fa'


function Order() {
  const {data: cartData} = useFetchCartQuery()
  const {data: userData} = useFetchUserQuery()
  
  const renderedProducts = () => {
    if (cartData) {
      return cartData.map((product) => {
        return <OrderItem key={product.id} product={product} />
      })
    } else {
      return <LoadingSpinner />
    }
  }
  
  const timeStamp = () => {
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    
    return `${day}/${month}/${year}`
  }
  
  const getAddress = () => {
    const street = faker.address.streetAddress()
    const sity = faker.address.cityName()
    const country = faker.address.country()
    const zip = faker.address.zipCode()
    
    return `${street}, ${sity}, ${country}, ${zip}`
  }
  
  return (
    <div className={s.order}>
      <div className={s.logo}>
        <FaCrown className={s.logoImg} />
        <h2 className={s.logoTitle}>Crown Clothing</h2>
      </div>
      <div className={s.titleContainer}>
        <h2 className={s.title}>Your order confirmed!</h2>
        <h3 className={s.subtitle}>
          {`Hi ${userData?.displayName}, you order confirmed and will be shipping soon.`}
        </h3>
      </div>
      <div className={s.shippingInfo}>
        <div className={s.item}>
          <span>Order date : </span>
          <span>{timeStamp()}</span>
        </div>
        <div className={s.item}>
          <span>Payment : </span>
          <span>Visa-4678</span>
        </div>
        <div className={s.item}>
          <span>Address : </span>
          <span>{getAddress()}</span>
        </div>
      </div>
      <div className={s.productTitles}>
        <span>Picture</span>
        <span>Name</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Total</span>
      </div>
      <div className={s.products}>
        
        {renderedProducts()}
      </div>
    </div>
  )
}

export default Order
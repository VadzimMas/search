import {useFetchCartQuery} from '../../../store/api/cart.api'
import OrderItem from './order-item/Order-item'
import LoadingSpinner from '../../loading-spiner/Loading-spinner'
import s from './order.module.scss'
import {useFetchUserQuery} from '../../../store/api/user.api'
import {faker} from '@faker-js/faker'
import {FaCrown} from 'react-icons/fa'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {useMemo} from 'react'


function Order() {
  const {data: cdata} = useFetchCartQuery()
  const {data: uData} = useFetchUserQuery()
  
  const cartData = useMemo(() => cdata, [])
  const userData = useMemo(() => uData, [])
  console.log(cartData)
  
  const renderedProducts = () => {
    if (cartData) {
      return cartData.map((product) => {
        return <OrderItem key={product.id} product={product} />
      })
    } else {
      return <LoadingSpinner />
    }
  }
  
  const totalOverAllPrice = () => {
    if (cartData) {
      let temp = 0
      for (const product of cartData) {
        temp += product.price * product.quantity
      }
      return temp
    } else {
      return 0
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
  
  const isOneItemInCart = () => {
    // if cart has only one position and one item => item
    if (cartData?.length === 1 && cartData[0].quantity === 1) {
      console.log(cartData)
      return 'item'
    }
    // otherwise => items
    return 'items'
  }
  
  const subtotal = Number(Number(totalOverAllPrice()).toFixed(2))
  const shipping = Number(Number(totalOverAllPrice() / 100).toFixed(2))
  const taxes = Number(Number(totalOverAllPrice() / 100 * 6).toFixed(2))
  const discount = Number(Number(totalOverAllPrice() / 100 * 3).toFixed(2))
  console.log(typeof subtotal)
  const total = Number(subtotal + shipping + taxes - discount).toFixed(2)
  return (
    <div className={s.order}>
      <header className={s.logo}>
        <FaCrown className={s.logoImg} />
        <h2 className={s.logoTitle}>Crown Clothing</h2>
      </header>
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
      <div className={s.totalContainer}>
        <div>
          <span>Subtotal</span>
          <span>$ {subtotal}</span>
        </div>
        <div>
          <span>Express shipping</span>
          <span>$ {shipping}</span>
        </div>
        <div>
          <span>Taxes</span>
          <span>$ {taxes}</span>
        </div>
        <div>
          <span>Discount</span>
          <span>-3% ($ {discount})</span>
        </div>
        <div>
          <span>Total</span>
          <span>$ {total}</span>
        </div>
      </div>
      <div className={s.massage}>
        <p>
          {`We will send you shipping confirmation when your ${isOneItemInCart()} are one the way!
        We appreciate you business, and hope you enjoy you purchase.`}
        </p>
        <div className={s.thanks}>
          <span>Thank you.</span>
          <div className={s.thanksLogo}>
            <FaCrown className={s.thanksLogoImg} />
            <span className={s.thanksLogoTitle}>Crown Clothing :)</span>
          </div>
        </div>
      </div>
      <footer className={s.footer}>
        <span className={s.footerText}>Questions? Contact our Customer Support</span>
        <span className={s.copyright}>
          <AiOutlineCopyrightCircle className={s.copyrightImg} />
          <span className={s.year}>{new Date().getFullYear()}</span>
           <span className={s.footerLogo}>
            <FaCrown className={s.footerLogoImg} />
            <span className={s.footerLogoTitle}>Crown Clothing</span>
           </span>
        </span>
      </footer>
    </div>
  )
}

export default Order
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import s from './payment.module.scss'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {useFetchCartQuery} from '../../../store/api/cart.api'
import CheckoutItem from '../checkout-item/Checkout-item'
import {auth} from '../../../utils/firebase'

function Payment() {
  const stripe = useStripe()
  const elements = useElements()
  const currentUser = auth.currentUser
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  
  const {data: cartData} = useFetchCartQuery()
  
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
  
  
  
  const paymentHandler = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }
    setIsProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method : 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body   : JSON.stringify({amount: totalOverAllPrice() * 100})
    })
      .then((res) => {
        return res.json()
      })
    console.log(response)
    const clientSecret = response.paymentIntent.client_secret
    
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card           : elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Vadim'
        }
      }
    })
    
    setIsProcessingPayment(false)
    
    if (paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!')
      }
    }
  }
  
  
  const root = document.querySelector(':root')
  const rootVariable = getComputedStyle(root)
  
  const cardStyle = {
    style: {
      base   : {
        color          : '#32325d',
        fontFamily     : 'Arial, sans-serif',
        fontSmoothing  : 'antialiased',
        fontSize       : '30px',
        '::placeholder': {
          color: rootVariable.getPropertyValue('--sidebar-text-color')
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color     : '#fa755a',
        iconColor : '#fa755a'
      }
    }
  }
  
  return (
    <form className={s.paymentForm} onSubmit={paymentHandler}>
      <h2 className={s.title}>Credit card payment: </h2>
      <CardElement className={s.creditCard} options={cardStyle} />
      <button type="submit">Pay now</button>
    </form>
  )
}


export default Payment
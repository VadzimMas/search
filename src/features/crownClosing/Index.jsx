import {Fragment} from 'react'
import CrownClothing from './components/crownClothing/Crown-clothing'
import {Provider} from 'react-redux'
import store from './redux/store'
import {Elements} from '@stripe/react-stripe-js'
import {stripePromise} from './utils/stripe/stripe'


function Index() {
  
  
  return (
    <Fragment>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <CrownClothing />
        </Elements>
      </Provider>
    </Fragment>
  )
}

export default Index
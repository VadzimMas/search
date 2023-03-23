import {Fragment} from 'react'
import CrownClothing from './Crown-clothing'
import {Provider} from 'react-redux'
import store from './redux/store'

function Index() {
  return (
    <Fragment>
      <Provider store={store}>
        <CrownClothing/>
      </Provider>
    </Fragment>
  )
}

export default Index
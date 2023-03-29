import React, {Fragment} from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './features/searchUsers/store'
import router from './router/router'
import {RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Fragment>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </Fragment>
)


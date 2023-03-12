import './index.scss'
import './mixins.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './store'
import {RouterProvider} from 'react-router-dom'
import router from './router/router'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>,
)


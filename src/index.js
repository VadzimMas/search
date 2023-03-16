import IndexStyled from './Index.styled'
import React, {Fragment} from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './store'
import router from './router/router'
import ResetStyled from './Reset.styled'
import {RouterProvider} from 'react-router-dom'
import ScrollToTop from './hooks/ScrollToTop'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Fragment>
    <ResetStyled/>
    <IndexStyled/>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </React.StrictMode>
  </Fragment>
)


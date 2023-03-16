import AppStyled from './App.styled'
import Sidebar from './components/sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
import ScrollToTop from '../hooks/ScrollToTop'
import {Fragment} from 'react'

function App() {
  return (
    <Fragment>
      <ScrollToTop/>
      <AppStyled>
        <Sidebar/>
        <div className="detail" id="detail">
          <Outlet/>
        </div>
      </AppStyled>
    </Fragment>
  )
}

export default App

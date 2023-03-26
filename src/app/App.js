import Sidebar from './components/sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
import ScrollToTop from '../hooks/ScrollToTop'
import {Fragment} from 'react'
import s from './app.module.scss'

function App() {
  return (
    <Fragment>
      <ScrollToTop />
      <div className={s.app}>
        <Sidebar />
        <div className={s.detail} id="detail"><Outlet /></div>
      </div>
    </Fragment>
  )
}

export default App

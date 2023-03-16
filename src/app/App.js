import s from './app.module.scss'
import Sidebar from './components/sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
import ScrollToTop from '../hooks/ScrollToTop'

function App() {
  return (
    <div className={s.app}>
      <ScrollToTop/>
      <Sidebar className={s.sidebar}/>
      <div className={s.detail} id="detail"><Outlet/></div>
    </div>
  )
}

export default App

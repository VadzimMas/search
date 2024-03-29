import {useNavigate, useRouteError} from 'react-router-dom'
import img from '../app/assets/nature.jpg'
import dude from '../app/assets/dude.svg'
import {useEffect} from 'react'
import s from './error-page.module.scss'

function ErrorPage() {
  const error = useRouteError()
  const goHome = useNavigate()
  console.error(error)
  
  useEffect(() => {
    function disableScroll() {
      // Get the current page scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      
      // if any scroll is attempted, set this to the previous value
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop)
      }
    }
    
    function enableScroll() {
      window.onscroll = function () {
      }
    }
    
    
    disableScroll()
    return () => {
      enableScroll()
    }
  }, [])
  
  
  return (
    <div className={s.errorPage} id="error-page">
      <img src="../app/assets/nature.jpg" image={img} />
      <div className={s.errorContainer}>
        <div className={s.error}>
          <h1>Oops..!</h1>
          <h2>404</h2>
          <p>There’s Nothing here...</p>
          <p>
            ...may be the page you’re looking for is not found or neverr existed.
          </p>
          <button onClick={() => goHome('/')}>Back to Home</button>
        </div>
        <div className={s.image}>
          <img src={dude} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ErrorPage

import {useNavigate, useRouteError} from 'react-router-dom'
import {Error, ErrorContainer, ErrorPageStyled, Image} from './Error-page.styled'
import {BackgroundImage} from '../../../features/crownClosing/components/background/Background.styled'
import img from '../../assets/nature.jpg'
import dude from '../../assets/dude.svg'
import {useEffect} from 'react'

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
    <ErrorPageStyled id="error-page">
      <BackgroundImage image={img}/>
      <ErrorContainer>
        <Error>
          <h1>Oops..!</h1>
          <h2>404</h2>
          <p>There’s Nothing here...</p>
          <p>
            ...may be the page you’re looking for is not found or neverr existed.
          </p>
          <button onClick={() => goHome('/')}>Back to Home</button>
        </Error>
        <Image>
          <img src={dude} alt=""/>
        </Image>
      </ErrorContainer>
    </ErrorPageStyled>
  )
}

export default ErrorPage

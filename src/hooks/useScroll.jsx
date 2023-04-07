import {useEffect, useState} from 'react'

//setup intensity how much scroll from 1 to ...
const useScroll = (scrollY) => {
// when window scrolling isScroll became true
  const [isScroll, setIsScroll] = useState(false)
  
  const changeBackground = () => {
    if (window.scrollY >= scrollY) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }
  
  useEffect(() => {
    // adding the event when scroll change Logo
    window.addEventListener('scroll', changeBackground)
    
    //clear event
    return () => window.removeEventListener('scroll', changeBackground)
  }, [changeBackground, isScroll])
  
  return [isScroll]
}

export default useScroll
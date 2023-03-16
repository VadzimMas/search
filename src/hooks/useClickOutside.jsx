import {useEffect, useRef, useState} from 'react'

// usage import const [ref, isMenuOpen, setIsMenuOpen] = useClickOutside()
// put ref prop to element  <div ref={ref} > some text </div>

const useClickOutside = (props) => {
  const ref = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(!isMenuOpen)
      }
    }
    
    
    //////////////////////////////////////////////////////////////////////
    
    // if menu is open freeze and shadow body
    if (isMenuOpen) {
      const newDiv = document.createElement('div')
      newDiv.classList.add(`useClickOutside`)
      newDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
      `
      document.getElementsByTagName('body')[0].append(newDiv)
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'unset'
      const newDiv = document.getElementsByClassName('useClickOutside')[0]
      if (newDiv) {
        newDiv.remove()
      }
    }
    //////////////////////////////////////////////////////////////////////
    
    
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isMenuOpen])
  return [ref, isMenuOpen, setIsMenuOpen]
}

export default useClickOutside
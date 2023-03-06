import {useEffect, useRef, useState} from 'react'

// usage put ref prop to element  <div ref={ref} > some text </div>

const useClickOutside = () => {
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
    
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isMenuOpen])
  return [ref, isMenuOpen, setIsMenuOpen]
}

export default useClickOutside
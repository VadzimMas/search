import {useState} from 'react'
import {IoMdPartlySunny} from 'react-icons/io'
import {BsMoonStars} from 'react-icons/bs'
import {ImSun} from 'react-icons/im'

const useTheme = () => {
  const [theme, setTheme] = useState('auto')
  
  // setup which button will be return after state changes
  const themeIcon = () => {
    // default position by system theme
    if (theme === 'auto') {
      // //if system theme dark next call will be opposite
      // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //   return <IoMdPartlySunny onClick={() => changeTheme('light-mode')} />
      // }
      // //else if system theme light next call will be opposite
      // else {
      //   return <IoMdPartlySunny onClick={() => changeTheme('dark-mode')} />
      // }
      return <IoMdPartlySunny onClick={() => changeTheme('light-mode')} />
    }
    //if user choose theme light return moon button
    else if (theme === 'light-mode') {
      return <BsMoonStars onClick={() => changeTheme('dark-mode')} />
    }
    //if user choose theme dark return sun button
    else if (theme === 'dark-mode') {
      return <ImSun onClick={() => changeTheme('auto')} />
    }
  }
  // options to change header in safari browser with theme color scheme
  // add two tags to head in HTML document and change content property
  // when changing color scheme for body
  // <meta id="color-theme-dark" name="theme-color" content="rgba(17, 16, 23)" media="(prefers-color-scheme: dark)">
  // <meta id="color-theme-light" name="theme-color" content="rgba(245, 222, 179)" media="(prefers-color-scheme: light)">
  
  //getting colors from stiles
  const root = document.querySelector(':root')
  const lightColor = getComputedStyle(root).getPropertyValue('--browser-header-light')
  const darkColor = getComputedStyle(root).getPropertyValue('--browser-header-dark')
  
  
  // check if head has meta tags for theming safari header if not create
  if (!document.getElementById('color-theme-light')) {
    const lightHeader = document.createElement('meta')
    lightHeader.setAttribute('id', 'color-theme-light')
    lightHeader.setAttribute('name', 'theme-color')
    lightHeader.setAttribute('content', lightColor)
    lightHeader.setAttribute('media', '(prefers-color-scheme: light)')
    
    const darkHeader = document.createElement('meta')
    darkHeader.setAttribute('id', 'color-theme-dark')
    darkHeader.setAttribute('name', 'theme-color')
    darkHeader.setAttribute('content', darkColor)
    darkHeader.setAttribute('media', '(prefers-color-scheme: dark)')
    
    document.querySelector('head').append(lightHeader)
    document.querySelector('head').append(darkHeader)
  }
  
  
  // onClick action
  const changeTheme = (themeMode) => {
    if (themeMode !== 'auto') {
      // cannot toggle due to different events triggers classes,
      // remove then and set actual class to body
      document.querySelector('body').classList.remove('light-mode')
      document.querySelector('body').classList.remove('dark-mode')
      document.querySelector('body').classList.add(themeMode)
      //changes theme for meta tag for theming safari header
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById('color-theme-dark').setAttribute('content',
          themeMode === 'light-mode' ? lightColor : darkColor)
      } else {
        document.getElementById('color-theme-light').setAttribute('content',
          themeMode === 'light-mode' ? lightColor : darkColor)
      }
    }
    //
    else if (themeMode === 'auto') {
      document.querySelector('body').classList.remove('light-mode')
      document.querySelector('body').classList.remove('dark-mode')
      document.getElementById('color-theme-dark').setAttribute('content', darkColor)
      document.getElementById('color-theme-light').setAttribute('content', lightColor)
    }
    
    setTheme(themeMode)
    
  }
  
  return [themeIcon]
}


export default useTheme
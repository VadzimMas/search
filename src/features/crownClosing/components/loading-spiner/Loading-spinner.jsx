import s from './loading-spinner.module.scss'
import {TbBrandReactNative} from 'react-icons/tb'
import {Fragment} from 'react'


const LoadingSpinner = () => {
  return (
    <Fragment>
      <TbBrandReactNative className={s.loading}/>
    </Fragment>
  )
}

export default LoadingSpinner



  
  

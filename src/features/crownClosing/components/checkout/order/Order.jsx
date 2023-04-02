import {useFetchCartQuery} from '../../../store/api/cart.api'
import OrderItem from './order-item/Order-item'
import LoadingSpinner from '../../loading-spiner/Loading-spinner'

function Order() {
  const {data} = useFetchCartQuery()
  
  const renderedProducts = ()=>{
    if (data){
    return data.map((product)=>{
     return <OrderItem key={product.id} product={product}/>
    })
    } else{
      return <LoadingSpinner/>
    }
  }
  
  return (
    <div>{renderedProducts()}</div>
  )
}

export default Order
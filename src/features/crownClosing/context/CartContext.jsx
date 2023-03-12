import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext({
  cartProducts: [],
  addProductToCart: () => null,
  deleteProductFromCart: () => null,
  upQuantity: () => null,
  downQuantity: () => null,
  totalOverAllPrice: 0,
  totalPricePerProduct: 0,
})

export const CartProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([])
  const [totalOverAllPrice, setTotalOverAllPrice] = useState(0)
  const [totalPricePerProduct, setTotalPricePerProduct] = useState(0)
  
  
  //calculates total cost over all products in cart
  useEffect(() => {
    const temp = cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
    setTotalOverAllPrice(temp)
    
  }, [cartProducts])
  
  const addProductToCart = (product) => {
    const isProduct = cartProducts.find((el) => el.id === product.id)
    
    if (isProduct) {
      setCartProducts(cartProducts.map((el) => {
        return el.id === product.id ? {...el, quantity: el.quantity += 1} : el
      }))
    } else {
      setCartProducts([...cartProducts, {...product, quantity: 1}])
    }
  }
  
  const deleteProductFromCart = (id) => {
    setCartProducts(
      cartProducts.filter((el) => {
        return el.id !== id
      }),
    )
  }
  
  const upQuantity = (id) => {
    setCartProducts(cartProducts.map((el) => {
      return el.id === id ? {...el, quantity: el.quantity += 1} : el
    }))
  }
  
  const downQuantity = (id) => {
    setCartProducts(cartProducts.map((el) => {
      if (el.id === id && el.quantity > 0) {
        return {...el, quantity: el.quantity -= 1}
      } else {
        return el
      }
    }))
  }
  
  
  const value = {
    cartProducts,
    addProductToCart,
    deleteProductFromCart,
    upQuantity,
    downQuantity,
    totalOverAllPrice,
    totalPricePerProduct,
  }
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}


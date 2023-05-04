import { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface CartContextData {
  cartItems: IProduct[]
  addToCart: (product: IProduct) => void
  checkIfProductAlreadyExists: (productId: string) => boolean
  removeProductInCart: (productId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  function addToCart(product: IProduct) {
    setCartItems(state => [...state, product])
  }

  function checkIfProductAlreadyExists(produtId: string) {
    return cartItems.some(product => product.id === produtId)
  }

  function removeProductInCart(productId: string) {
    setCartItems(cartItems.filter(product => product.id !== productId))
  }

  const values = {
    cartItems,
    addToCart,
    checkIfProductAlreadyExists,
    removeProductInCart
  }

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}
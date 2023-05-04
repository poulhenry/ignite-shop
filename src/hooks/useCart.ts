import { useContext } from "react";
import { CartContext } from "../contexts/CartContent";

export function useCart() {
  return useContext(CartContext)
}
import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, Container, ContainerProducts } from "./styles";
import { ItemProduct } from "../ItemProduct";
import { CartButton } from '../CartButton';
import { X } from '@phosphor-icons/react';
import { useCart } from '../../hooks/useCart';
import { useState } from 'react';
import axios from 'axios';

export function Sidebar() {
  const { cartItems } = useCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const totalCart = cartItems.reduce((acc, product) => {
    acc += product.numberPrice

    return acc
  }, 0)

  const totalCartFormatted = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  }).format(totalCart)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cartItems
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      alert('Falha ao redirecionar ao checkout.')
      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton quantity={cartItems.length} color="gray" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Container>
          <CartClose>
            <X size={24} />
          </CartClose>

          <ContainerProducts>
            <h3>Sacola de compras</h3>

            {cartItems.length >= 1 ? cartItems.map(product => (
              <ItemProduct key={product.id} product={product} />
            )) : (<p>Opa, parece que seu carrinho está vazio :(</p>)}
          </ContainerProducts>

          <footer>
            <div>
              <span>Quantidade</span>
              <span>{cartItems.length == 1 ? '1 item' : `${cartItems.length} itens`} </span>
            </div>

            <div>
              <strong>Valor total</strong>
              <strong>R$ {totalCartFormatted}</strong>
            </div>

            <button disabled={isCreatingCheckoutSession} onClick={handleCheckout} type="button">Finalizar compra</button>
          </footer>

        </Container>
      </Dialog.Portal>
    </Dialog.Root>
    
  )
}
import { Handbag } from '@phosphor-icons/react'
import type { ComponentPropsWithoutRef } from 'react'
import { CartButtonContainer } from './styles'

interface CartButtonProps extends ComponentPropsWithoutRef<typeof CartButtonContainer> {
  quantity?: number
}

export function CartButton({ quantity, ...rest }: CartButtonProps) {

  return (
    <CartButtonContainer { ...rest }>
      <Handbag size={24} weight='bold' />
      {quantity > 0 && <span>{quantity}</span>}
    </CartButtonContainer>
  )
}
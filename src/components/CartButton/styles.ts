import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
  position: 'relative',
  width: '3rem',
  height: '3rem',
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',

  span: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',
    background: '$green500',
    color: 'white',
    fontWeight: 'bold',
    border: '3px solid $gray900',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  '&:hover': {
    color: '#C4C4CC'
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  variants: {
    color: {
      gray: {
        color: '$gray200',
        background: '$gray800',
      },
      green: {
        color: 'white',
        background: '$green500',
      }
    }
  }
})
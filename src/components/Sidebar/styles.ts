import * as Dialog  from "@radix-ui/react-dialog";
import { styled } from "../../styles";

export const Container = styled(Dialog.Content, {
  position: 'fixed',
  right: 0,
  top: 0,
  bottom:0,
  zIndex: 100,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    marginTop: 'auto',

    div: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      span: {
        fontSize: '1rem',
        fontWeiht: 400,
        color: '$gray100'
      },

      strong: {
        fontSize: '$md',
        fontWeiht: 700,
        color: '$gray100'
      }
    },

    button: {
      width: '100%',
      padding: '20px 32px',
      background: '$green500',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      fontWeight: 700,
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '1rem',
  
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      },
  
      '&:not(:disabled):hover': {
        background: '$green300',
      }
    }
  },
})

export const CartClose = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray300',
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem'
})

export const ContainerProducts = styled('div', {
  width: '100%',
  maxHeight: '30rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  overflowY: 'auto',

  h3: {
    display:'block',
    fontSize: '$lg',
    fontWeight: 700,
    color: '$gray100'
  }

})
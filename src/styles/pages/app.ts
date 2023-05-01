import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  // justifyContent: 'space-between',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '1rem 0',
  width: '100%',
  maxWidth: 1180,
  margin:'0 auto',
 
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  button: {
    position: 'relative',
    width: '3rem',
    height: '3rem',
    borderRadius: 6,
    border: 'none',
    color: '$gray200',
    background: '$gray800',
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
    }
  }
})
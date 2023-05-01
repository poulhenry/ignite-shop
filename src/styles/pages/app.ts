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
    width: '3rem',
    height: '3rem',
    borderRadius: 6,
    border: 'none',
    color: '$gray200',
    background: '$gray800',
    cursor: 'pointer',

    '&:hover': {
      color: '#C4C4CC'
    }
  }
})
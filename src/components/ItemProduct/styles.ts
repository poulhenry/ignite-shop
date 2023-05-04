import { styled } from "../../styles";

export const ContainerItemProduct = styled('div', {
  width: '100%',
  height: '5.875rem',

  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',

    p: {
      fontSize: '$md',
      fontWeight: 400,
      color: '$gray300'
    },

    strong: {
      fontSize: '$md',
      fontWeight: 700,
      color: '$gray100'
    },

    a: {
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '1rem',
      color: '$green300',

      '&:hover': {
        color: '$green500'
      }
    }
  }
})

export const ImageContainerItemProduct = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: '100%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'contain',
    width: '100%',
  }
})
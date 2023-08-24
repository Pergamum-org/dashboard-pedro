import { styled } from "@/styles";
import * as Dialog from '@radix-ui/react-dialog';


export const Trigger  = styled(Dialog.Trigger, {
    fontSize: '$md',
    color: '$gray200',
    fontWeight: '$bold',

    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    padding: '$2',
    background: '$green400',

    border: '1px solid $gray900',
    borderRadius: '$sm',
    cursor: 'pointer',

    outline: 'none',
    transition: 'background-color 0.2s',

    '&:not(:disabled):hover, &:not(:disabled):focus':{
      border: '1px solid $gray300',
      background: '$green700',
    },

  "@media (max-width: 800px)": {
    gap: '$1',
    padding: '$2',
    marginLeft: '1.5rem'
  }
})

export const Overlay  = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: '0',
  background: 'rgba(0, 0, 0, 0.3)'
})

export const Content  = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  width: '80vw',
  padding: '2rem',

  borderRadius: '$md',
  background: '#bbb',
})

export const Hero = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Close  = styled(Dialog.Close, {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  width: 40,
  background: 'transparent',
  outline: 'none',
  border: 'none',
  height: 40,
  cursor: 'pointer',
  color: '#000',
  transition: 'color 0.2s',
  '&:hover':{
    color: '#A80000',
  }
})

export const Navgation = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 400
})

export const MainContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2rem',

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    width: '100%',

    label: {
      display: 'flex',
      flexDirection: 'column',
      gap: '$3',
      color: '$purple',
      fontSize: '$lg',
      fontWeight: '$bold',

      input: {
        border: '1px solid #bbb',
        borderRadius: '$md',
        color: '#000',
        padding: '$2',
        outline: 'none',

        '&::placeholder': {
          color: '$gray600',
          opacity: 0.7,
        }
      }
    },

    h2: {
      color: '$purple',
      fontSize: '$lg',
      fontWeight: '$bold',
    },

    div: {
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '$3',

      label: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '$gray50',
        fontSize: '$md',
        border: '1px solid $gray50',
        borderRadius: '$md',
        padding: '$3 0',
        width: '100%',
        cursor: 'pointer',
        transition: 'border, filter 0.2s',

        '&:hover': {
          border: '1px solid $purple',
          filter: 'brightness(0.8)'
        },

        input: {
          display: 'hidden',
          width: 0,
          height: 0,
          overflow: 'hidden',
          position: 'absolute',
        },
      }
    },

    button: {
      marginTop: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$3',

      cursor: 'pointer',
      border: '1px solid $green400',
      borderRadius: '$md',
      background: '$green400',
      transition: 'background-color 0.2s',
      outline: 'none',
      fontSize: '$2xl',
      fontWeight: 'bold',
      padding: '$3',

      '&:hover': {
        background: '$green500',
        border: '1px solid $green200'
      }
    }
  }
})

export const Title = styled('h2', {
    color: '$purple',
    lineHeight: '$base',
    borderBottom: '2px solid $purple',

    variants: {
      select: {
        true: {
          borderBottom: '2px dotted $purple'
        }
      }
    }
})
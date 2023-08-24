import { styled } from "@/styles";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '$3 $2',
  background: '$gray400',
  borderRadius: '$md',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

  strong: {
    color: '#090909',
    fontSize: '$lg',
  }
})

export const Status = styled('strong', {
  color: '#090909',
  fontSize: '$lg',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  span: {
    width: 12,
    height: 12,
    borderRadius: 999,
  },

  variants: {
    status: {
      up: {
        span: {
          background: '$purple',
        }
      },
      error: {
        span: {
          background: '#9E2020',
        }
      },
      warning: {
        span: {
          background: '#7E7D7D',       
        }
      }
    }
  }
})
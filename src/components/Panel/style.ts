import { styled } from "@/styles";

export const Container = styled('section', {
  background: '#fff',
  padding: '1rem 2rem',
  borderRadius: '$md',

  div: {
    paddingBottom: '1rem',
    borderBottom: '1px solid $purple',
    width: '100%',
  }
})

export const PanelStatus = styled("article", {
  display: "flex",
  flexDirection: 'column',
  gap: '$5',
  marginTop: '1.5rem', 
  height: '100%',
  maxHeight: '45vh',
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    width: 0,
  },
})
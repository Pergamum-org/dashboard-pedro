import { styled } from "..";

export const Container = styled('div',{ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6.5rem',
    width: '100%',
    minHeight: '100vh'
})

export const Header = styled('header', {
    background: '$purple',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    minHeight: '8rem',
    height: '100%',
})

export const Services = styled('div',{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '$2',
    marginBottom: '-4rem',

    h1: {
        fontSize: '$2xl'
    },

    div:{
        background: '$gray300',
        borderRadius: '$md',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 320,
        width: '100%',
        padding: '$3 0',

        h2: {
            fontSize: '3.125rem',
            fontWeight: '$bold',
            color: '$black'
        }
    }
    
})

export const MainContent = styled('main', {
    width: '100%',
    maxWidth: 'calc(100vw - 120px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$6',
    margin: '0 auto',

    "@media (max-width: 800px)": {
        maxWidth: '100vw',
        gridTemplateColumns: '1fr',
    }
})
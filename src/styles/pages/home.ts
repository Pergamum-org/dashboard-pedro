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
    alignItems: 'flex-end'
})

export const Services = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    gap: '$xs',
    h1: {
        fontSize: '$2xl'
    },
    div:{
        background: '$gray300',
        borderRadius: '$md',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        h2: {
            fontSize: '3.125rem',
            fontWeight: '$bold',
            color: '$black'
        }
    }
    
})
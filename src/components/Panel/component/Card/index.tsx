import { Container, Status } from "./style"

interface CardProps {
    name: string
    status: 'up' | 'warning' | 'error'
}

export function Card({name, status}: CardProps){
    return (
        <Container>
            <strong>{name}</strong>
            <Status status={status} >Status <span /></Status>
        </Container>
    )
}
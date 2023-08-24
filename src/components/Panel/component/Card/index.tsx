interface CardProps {
    name: string
    status: 'up' | 'warning' | 'error'
}

export function Card({name, status}: CardProps){
    return (
        <div>
            <strong>{name}</strong>
        </div>
    )
}
const Card = ({ currentCardData }) => {
    return (
        <div>
            <h2>{currentCardData.title}</h2>
            <p>{currentCardData.description}</p>
        </div>
    )
}

export default Card;
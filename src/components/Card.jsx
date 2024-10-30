const Card = ({ currentCardData, nextStep }) => {
    return (
        <div>
            <h2>{currentCardData.title}</h2>
            <p>{currentCardData.description}</p>
            <button onClick={nextStep}>Next</button>
        </div>
    )
}

export default Card;
import { IoMdArrowForward } from "react-icons/io";

const Card = ({ currentCardData, nextStep }) => {
    const bgColor = currentCardData.bgColor;

    return (
        <div className="card-container">
            <div className="card">
                <img className="card-img" src={currentCardData.image} style={{ backgroundColor: bgColor }} alt={currentCardData.title} />
                <div className="card-text">
                    <h2>{currentCardData.title}</h2>
                    <p>{currentCardData.description}</p>
                </div>
                <button className="btn" onClick={nextStep}>
                    <IoMdArrowForward />
                </button>
            </div>
        </div>
    )
}

export default Card;
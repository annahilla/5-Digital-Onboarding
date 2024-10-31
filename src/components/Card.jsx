import Indicator from "./Indicator";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const Card = ({ currentCardData, tutorialData, step, nextStep, prevStep, setStep, animationClass, setAnimationClass }) => {
    const bgColor = currentCardData.bgColor;

    return (
        <div className="card-container">
            <div className={`card ${animationClass}`} id={`card-${step + 1}`}>
                <img className="card-img" src={currentCardData.image} style={{ backgroundColor: bgColor }} alt={currentCardData.title} />
                <div className="card-text">
                    <h2>{currentCardData.title}</h2>
                    <p>{currentCardData.description}</p>
                </div>
                <div className="card-footer">
                    <Indicator tutorialData={tutorialData} step={step} setStep={setStep} setAnimationClass={setAnimationClass} />
                    <div className="btn-container">
                        {
                            step !== 0
                            && <button className="btn btn-prev" onClick={prevStep}>
                                <IoArrowBack />
                            </button>

                        }
                        {
                            step !== tutorialData.length - 1
                            && <button className="btn btn-next" onClick={nextStep}>
                                <IoMdArrowForward />
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const Card = ({ currentCardData, tutorialData, step, nextStep, prevStep }) => {
    const bgColor = currentCardData.bgColor;

    // const progressStep1 = step === 0 ? 'progress active' : 'progress';
    // const progressStep2 = step === 1 ? 'progress active' : 'progress';
    // const progressStep3 = step === 2 ? 'progress active' : 'progress';

    const progressSteps = tutorialData.map((_, index) => (
        <div key={index} className={step === index ? 'progress active' : 'progress'}></div>
    ))

    return (
        <div className="card-container">
            <div className="card">
                <img className="card-img" src={currentCardData.image} style={{ backgroundColor: bgColor }} alt={currentCardData.title} />
                <div className="card-text">
                    <h2>{currentCardData.title}</h2>
                    <p>{currentCardData.description}</p>
                </div>
                <div className="card-footer">
                    <div className="progress-container">
                        {progressSteps}
                    </div>
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
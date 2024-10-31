const Indicator = ({ tutorialData, step, setStep }) => {
    const goToStep = (index) => {
        setStep(index);
    }

    const progressSteps = tutorialData.map((_, index) => (
        <div key={index} className={step === index ? 'progress active' : 'progress'} onClick={() => goToStep(index)}></div>
    ))

    return (
        <div className="progress-container">
            {progressSteps}
        </div>
    )
}

export default Indicator;
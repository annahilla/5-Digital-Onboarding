const Indicator = ({ tutorialData, step }) => {
    const progressSteps = tutorialData.map((_, index) => (
        <div key={index} className={step === index ? 'progress active' : 'progress'}></div>
    ))

    return (
        <div className="progress-container">
            {progressSteps}
        </div>
    )
}

export default Indicator;
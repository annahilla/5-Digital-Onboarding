const Indicator = ({ tutorialData, step, setStep, setAnimationClass }) => {
    const goToStep = (index) => {
    
        if(index > step) {
            setAnimationClass('disappear-left');
            setTimeout(() => {
                setStep(index);
                setAnimationClass('appear-right');
            }, 300);
        } else {
            setAnimationClass('disappear-right');
            setTimeout(() => {
                setStep(index);
                setAnimationClass('appear-left');
            }, 300);
        }
    }

    const progressSteps = tutorialData.map((_, index) => { 
        return   (
                <div key={index} className={step === index ? 'progress active' : 'progress'} onClick={() => goToStep(index)}></div>
            )
    }
        
    )

    return (
        <div className="progress-container">
            {progressSteps}
        </div>
    )
}

export default Indicator;
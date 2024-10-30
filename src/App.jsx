import Card from './components/Card'
import { useState } from 'react'
import timeManagementImage from './assets/time_managment.svg';
import programmingImage from './assets/programming.svg';
import meditationImage from './assets/meditation.svg';
import './App.css'

function App() {
  const [step, setStep] = useState(0)

  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#4da2a9",
      image: timeManagementImage
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#d3d4d9",
      image: programmingImage
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consol·lidaràs el teu aprenentatge.",
      bgColor: "#ffd167",
      image: meditationImage
    },
  ]

  const nextStep = () => {
    setStep(prev => prev + 1)
  }

  return (
    <>
      <Card currentCardData={tutorialData[step]} nextStep={nextStep} />
    </>
  )
}

export default App

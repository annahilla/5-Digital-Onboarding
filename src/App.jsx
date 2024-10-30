import Card from './components/Card'
import { useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(0)

  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: 'blue',
      image: ''
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: 'gray',
      image: ''
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consol·lidaràs el teu aprenentatge.",
      bgColor: 'blue',
      image: ''
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

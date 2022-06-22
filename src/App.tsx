import './App.css';

import React, { FC, useState } from 'react';

import logo from './logo.svg';

function App() {
  const [state, setState] = useState<any>(undefined);

  const [step, setStep] = useState<number>(1);

    if (step === 1) {
      return <Page1 step={step} setStep={setStep}/>
    } else if (step === 2) {
      return <Page2 step={step} setStep={setStep}/>
    } else if (step === 3) {
      return <Page3 step={step} setStep={setStep} />;
    } else {
      return <Page1 step={step} setStep={setStep}/>
    }

}

const pageStyle: React.CSSProperties = {width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}

const PageControls = ({step, setStep}: {step: number, setStep: (num:number) => void }) => {
  const previous = () => {
    if (step !== 1) {
      setStep(step - 1)
    }
  }
  const next = () => {
    if (step !== 3) {
      setStep(step + 1)
    }
  }
  return (
    <div style={{display: "flex"}}>
      <button onClick={previous}>Previous Page</button>
      <button onClick={next}>Next Page</button>
    </div>
  )
}

const Page1 = ({step, setStep}: {step: number, setStep: (num:number) => void}) => {
  return (
    <div style={pageStyle}><h1>Page 1</h1><PageControls step={step} setStep={setStep} /></div>
  )
}

const Page2 = ({step, setStep}: {step: number, setStep: (num:number) => void}) => {
  return (
    <div style={pageStyle}><h1>Page 2</h1><PageControls step={step} setStep={setStep} /></div>
  )
}

const Page3 = ({step, setStep}: {step: number, setStep: (num:number) => void}) => {
  return (
    <div style={pageStyle}><h1>Page 3</h1><PageControls step={step} setStep={setStep} /></div>
  )
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [countre , setcountre] = useState(15)

  
  const addValue = () => {
    if(countre < 20){
    countre = countre + 1;
    setcountre(countre)
    }
  }

  const removeValue = () => {
    if(countre > 0){
    countre = countre - 1;
    setcountre(countre)
    }
  }

  return (
    <>
      <h1>Hi! Harsha</h1>
      <h2>Counter Value : {countre}</h2>

      <button 
        onClick={addValue}
      >Add Value</button>
      <br />
      <br />
     { <button
          onClick={removeValue}
      >Remove Value</button>}
    </>
  )
}

export default App

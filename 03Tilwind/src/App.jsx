import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let marks =[90,34,23,56,77]

  return (
    <>
    <h1 className='bg-green-700 rounded-2xl'>
    Hello world!
    </h1>
    <Card name = "Harsha" result = {marks}/>

    </>
  )
}

export default App

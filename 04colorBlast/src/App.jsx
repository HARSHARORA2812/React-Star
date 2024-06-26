
import { useState } from 'react'
import './App.css'

function App() {

  let [color,setcolor] = useState("olive")

  return (

      <div className="w-screen h-screen bg-violet-500" style={{backgroundColor : color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 index-x-0 px-2'>
           <div className='flex flex-wrap justify-center gap shadow-lg bg-slate-400 px-3 py-2 rounded-md gap-4 mx-44'>
            <button onClick={() => {setcolor("red")}} className='bg-red-600 outline-none px-3 py-2 shadow-lg ' 
            >Red</button>
            <button className='bg-green-600 outline-none px-3 py-2 shadow-lg '
            onClick={() => {setcolor("green")}}
            >Green</button>
            <button className='bg-blue-500 outline-none px-3 py-2 shadow-lg '
               onClick={() => {setcolor("blue")}}>blue</button>
            <button className='bg-orange-500 outline-none px-3 py-2 shadow-lg '
               onClick={() => {setcolor("orange")}}>orange</button>
            <button className='bg-pink-600 outline-none px-3 py-2 shadow-lg '
               onClick={() => {setcolor("pink")}}>pink</button>
            <button className='bg-yellow-600 outline-none px-3 py-2 shadow-lg '
               onClick={() => {setcolor("yellow")}}>yellow</button>
           </div>
        </div>
      </div>

  )
}

export default App

import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num , setNum] = useState(false)
  const [char , setChar] = useState(false)
  const [pass , setPass] = useState("")

const passRef = useRef(null)

  const PasswordGen = useCallback(() => {
    let password = "" 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsuvwxyz"
 
    if(num) str+= "0123456789"
    
    if(char) str+= "!@#$%^&*()~;:{}[]<>,.|"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      password = password + str.charAt(char)
    }

    setPass(password)



  },[length,num,char,setPass])

  const copypassword = useCallback(() => {
      passRef.current?.select()
      window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(() => {
    PasswordGen()
  } , [length,num,char,PasswordGen])

  return (
    <>

      <div className=' w-100 max-w-md mx-auto bg-gray-600 rounded-lg shadow-md my-8 px-4 py-4 text-orange-500'>
         <h3 className='text-center '>Password generator</h3>

          <div className='flex shadow rounded-lg overflow-hidden mb-4 w-full'>
            <input 
            type="text" 
            value={pass}
            className='outline-none w-full py-1 px-2'
            placeholder='password'
            ref={passRef}
            readOnly
            />
            <button
            onClick={copypassword}
            className='outline-none bg-blue-500 text-white px-3 py-1 shrink-0'
            >COPY</button>
          </div>

         <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-2'>
               <input 
               type="range"
               min={6}
               max={100}
               value={length}
               className='cursor-pointer'
               onChange={(e) => {setLength(e.target.value)}}
               />
               <label>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'> 
                 <input 
                 type="checkbox" 
                 defaultChecked = {num}
                 id='numberInput'
                 onChange={() => {
                  setNum((prev)=> !prev)
                 }}
                 
                 />
                 <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                   id="CharInput"
                   defaultChecked = {char}
                   onChange={() => {
                    setChar((prev) => !prev)
                   }}
                    />
                    <label htmlFor="CharInput">Character</label>
            </div>
         </div>
          
      </div>
    </> 
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)
  const addValue = () => {
    if(counter == 20){
      return
    }else{
      counter = counter + 1
      setcounter(counter)
    }
  }
  const removeValue = () => {
    if(counter==0){
      return
      
    } else{
      setcounter(counter-1)
    }
  }

  return (
    <>
       <h1>Chai or Code </h1>
       <h2>Counter Value: {counter}</h2>
       <button onClick={addValue}>
        Add Value {counter}
       </button>
       <br/>
       <button onClick={removeValue}>
        Remove Value {counter}
       </button>

    </>
  )
}

export default App

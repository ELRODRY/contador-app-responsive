import { useState } from 'react'
import './App.css'
import PropTypes from "prop-types"




function App() {

  const [count, setCount] = useState(0)
  const incrementValue = () => {

    setCount(count + 1)
  }

  const subtractVAlue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      alert("Minus zero is not allowed")
    }
  }

  const resetValue = () => {
    setCount(0)
  }



  return (

    <div id="container">
      <header><h1>Contador By ElRodryScript</h1>
      </header>
      <div id="botones">
        <button id='subtact' onClick={subtractVAlue}>-1</button>
        <button id='reset' onClick={resetValue}>RESET</button>
        <button id='increment' onClick={incrementValue}>+1</button>


      </div>
      <h2>Result = {count}</h2>
    </div>



  )
}


export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '../../children/src/component/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button text="something" onClick={() => {console.log("hello world")}}/>
    </div>
  )
}

export default App

import { useState } from "react"
import Header from "./Header/Header"

function App() {
  const [mode,setMode] = useState("Light");

  return (
    <div className="App">
      <Header mode={mode}/>
    
    </div>
  )
}

export default App

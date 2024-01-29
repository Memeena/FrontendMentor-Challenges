import { useState } from "react"
import Header from "./Header/Header"
import Search from "./Search/Search";

function App() {
  const [mode,setMode] = useState("Light");

  function handleChangeMode(){
    setMode((prev)=>prev.toLowerCase() === 'light' ? "dark" : "light");
  }

  return (
    <div className="App">
      <Header mode={mode} handleChangeMode={handleChangeMode}/>
      <Search/>
    
    </div>
  )
}

export default App

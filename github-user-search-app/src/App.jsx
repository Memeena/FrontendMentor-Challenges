import { useState } from "react";
import Header from "./Header/Header";
import Search from "./Search/Search";
import "./index.css";
import Result from "./Result/Result";

function App() {
  const [mode, setMode] = useState("Light");
  const [searchUser, setSearchUser] = useState("");
  const [result, setResult] = useState("");

  function handleChangeMode() {
    setMode((prev) => (prev.toLowerCase() === "light" ? "dark" : "light"));
  }

  return (
    <div className="App">
      <Header mode={mode} handleChangeMode={handleChangeMode} />
      <Search
        searchUser={searchUser}
        setSearchUser={setSearchUser}
        setResult={setResult}
      />
      <Result result={result} />
    </div>
  );
}

export default App;

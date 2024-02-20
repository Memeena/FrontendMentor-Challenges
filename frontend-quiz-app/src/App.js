import { useReducer } from "react";
import data from "./data/data.json";

console.log(data);

const initalState = {
  status: "ready",
  questions: data,
};

function reducer(state, action) {
  console.log(state, action);
}
function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;

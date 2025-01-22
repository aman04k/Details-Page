// src/App.jsx
import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Details from "./components/Details";

function App() {
  const [count, setCount] = useState(0);

  return (
   <>
    <Slider />
    <Details  />
   </>
  );
}

export default App;

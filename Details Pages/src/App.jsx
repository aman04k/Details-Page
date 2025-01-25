import { useState } from "react";
import "./App.css";
import Details from "./components/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CampaignForm from "./components/CampaignForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Details />} />

          <Route path="/CampaignForm" element={<CampaignForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import CampaignForm from './components/CampaignForm'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <CampaignForm />
   </>
  )
}

export default App

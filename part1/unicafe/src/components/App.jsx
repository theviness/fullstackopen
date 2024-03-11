import { useState } from "react"
import Feedback from "./feedback/Feedback"
import Statistics from "./statistics/Statistics"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad)
  }

  return (
    <>
      <Feedback 
        handleGoodClick={handleGoodClick}
        handleNeutralClick={handleNeutralClick}
        handleBadClick={handleBadClick}  />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} />
    </>
  )
}

export default App

import { useState } from "react"
import getRandomNumber from './utils/getRandomNumber'
import Button from "./components/shared/Button"
import Heading from './components/shared/Heading'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const anecdotesIndexes = {
    start: 0,
    end: anecdotes.length - 1
  }

  const randomNumber = getRandomNumber(anecdotesIndexes.start, anecdotesIndexes.end)
 
  const [selected, setSelected] = useState(randomNumber)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0, 
    7: 0
  })

  const handleNextAnecClick = () => {
    let nextAnecdote = selected + 1
    if(nextAnecdote === anecdotesIndexes.end + 1) 
      nextAnecdote = 0
    setSelected(nextAnecdote)
  }
  const handleVoteClick = () => {
    setPoints({
      ...points,
      [selected]: points[selected] + 1
    })
  }
  
  const getMostVoteAnecdote = () => {
    let pointEntries = Object.entries(points)
    let maxPoint = 0
    let maxKey = 0
    for(const [k, v] of pointEntries) {
    
      if(v > maxPoint) {
        maxPoint = v
        maxKey = k
      }
    }
    return maxKey;
  }

  return (
    <>
      <Heading content={'Anecdote of the day'} />
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button text={'vote'} handleClick={handleVoteClick} />
      <Button text={'next anecdote'} handleClick={handleNextAnecClick} />

      <Heading content={'Anecdote with most votes'} />
      <p>{anecdotes[getMostVoteAnecdote()]}</p>
      <p>has {points[getMostVoteAnecdote()]} votes</p>
    </>
  )
}

export default App

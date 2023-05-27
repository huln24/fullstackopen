import { useState } from 'react'

const Button = ({updateValue, text}) => {
  return <button onClick={updateValue}>{text}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const size = anecdotes.length
  const points = new Array(size).fill(0)

  // Initialize states
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  const [mostVoted, setMostVoted] = useState(-1)

  // Helper function
  const getRandomInt = () => {
    return Math.floor(Math.random() * size);
  }
  
  // Debugging console.logs
  console.log('selected',selected)
  console.log(votes)
  console.log('most voted', mostVoted)

  const updateSelected = () => {
    setSelected(getRandomInt())
  }

  const updateMostVoted = (arr) => {
    let max = 0
    let maxIndex = 0

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] > max) {
        max = arr[i]
        maxIndex = i
      }
    }

    setMostVoted(maxIndex);
  }

  const updateVote = () => {
    const newVote = [...votes];
    newVote[selected] += 1;

    updateMostVoted(newVote)
    setVotes(newVote) 
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <div>
        <Button updateValue={updateVote} text="Vote"/>
        <Button updateValue={updateSelected} text="Next Anecdote"/>
      </div>
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVoted]}
    </div>
  )
}

export default App

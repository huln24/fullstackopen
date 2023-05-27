import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  if (text.toLowerCase() === 'positive') {
    return <div>{text}: {value}%</div>
  }
  return <div>{text}: {value}</div>
}

const Stats = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  if (sum === 0) {
    return <div>No feedback given</div>
  }
  const avg = (good - bad)/ sum
  const pos = good/sum * 100
  return (
    <>
      <StatisticLine text="Good" value={good}/>
      <StatisticLine text="Neutral" value={neutral}/>
      <StatisticLine text="Bad" value={bad}/>
      <StatisticLine text="All" value={sum}/>
      <StatisticLine text="Average" value={avg}/>
      <StatisticLine text="Positive" value={pos}/>
    </>
  )
}

const FeedbackBtn = ({handleClick, name}) => {
  return (
    <button onClick={handleClick}>{name}</button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [all, setAll] = useState(0)
  //const counts = {good: good, neutral: neutral, bad: bad}

  const updateGood = () => {
    setGood(good + 1)
  }

  const updateNeutral = () => {
    setNeutral(neutral + 1)
  }

  const updateBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <FeedbackBtn handleClick={updateGood} name='good'/>
      <FeedbackBtn handleClick={updateNeutral} name='neutral'/>
      <FeedbackBtn handleClick={updateBad} name='bad'/>
      <h2>Statistics</h2>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
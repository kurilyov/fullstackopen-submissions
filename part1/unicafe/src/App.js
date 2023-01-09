import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad

  if (!total) {
    return <h3>No feedback given</h3>
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={(good - bad) / total} />
          <StatisticLine text='positive' value={good / total * 100 + '%'} />
        </tbody>
      </table>

    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button
          onClick={() => setGood(prev => prev + 1)}
          text='good' />
        <Button
          onClick={() => setNeutral(prev => prev + 1)}
          text='neutral' />
        <Button
          onClick={() => setBad(prev => prev + 1)}
          text='bad' />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App
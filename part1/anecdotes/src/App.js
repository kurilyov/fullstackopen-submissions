import { useState } from 'react'

const Anecdote = ({ title, body, votes, changeVote, getNewAnecdote }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>has {votes} votes</p>
      {changeVote && <button onClick={changeVote}>vote</button>}
      {getNewAnecdote && <button onClick={getNewAnecdote}>next anecdote</button>}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const maxVoteIndex = votes.indexOf(Math.max(...votes))

  const getNewAnecdote = () => {
    const newIndex = Math.floor(Math.random() * anecdotes.length)
    if (newIndex === selected) {
      getNewAnecdote()
    } else {
      setSelected(newIndex)
    }
  }

  const changeVote = () => {
    setVotes(prev => {
      const newVotes = [...prev]
      newVotes[selected] += 1

      return newVotes
    })
  }

  return (
    <div>
      <Anecdote
        title='Anecdote of the day'
        body={anecdotes[selected]}
        votes={votes[selected]}
        changeVote={changeVote}
        getNewAnecdote={getNewAnecdote}
      />
      <br />
      <Anecdote
        title='Anecdote with most votes'
        body={anecdotes[maxVoteIndex]}
        votes={votes[maxVoteIndex]}
      />
    </div>
  )
}

export default App
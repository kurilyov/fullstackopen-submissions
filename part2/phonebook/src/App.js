import { useState, useEffect } from 'react'
// import axios from 'axios'
import personsService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(res => setPersons(res))
  }, [])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else if (persons.find(person => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`)
    } else {
      personsService.create({ name: newName, number: newNumber })
        .then(res => setPersons(persons.concat(res)))
      setNewName('')
      setNewNumber('')
    }
  }

  const removePerson = id => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personsService.remove(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const personsToRender = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        value={filter}
        onChange={handleFilterChange}
      />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToRender} removeHandler={removePerson} />

    </div>
  )
}

export default App
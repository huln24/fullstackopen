import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (!persons.some(person => person.name === personObject.name)) {
      setPersons(persons.concat(personObject))
    }
    else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName('')
    setNewNumber('')
    console.log('button clicked', event.target)
  }

  const handleNameAdd = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberAdd = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const personToShow = search === '' 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch}/>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameAdd={handleNameAdd} 
        newNumber={newNumber} 
        handleNumberAdd={handleNumberAdd}/>
      <h2>Numbers</h2>
      <Persons persons={personToShow}/>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
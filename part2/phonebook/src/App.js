import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

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
    </div>
  )
}

export default App
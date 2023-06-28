import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import phonebookService from './services/phonebook'


const NewCounter = () => {
  let x = 100
  return function() {
    x = x + 1;
    return x;
  }
}

let Counter = NewCounter();

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPhonebook => {
        setPersons(initialPhonebook)
      })
  }, [])

  console.log('render', persons.length, 'notes')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: Counter()
    }

    if (!persons.some(person => person.name === personObject.name)) {
      phonebookService
        .create(personObject)
        .then(returnedPhonebook => {
          setPersons(persons.concat(returnedPhonebook))
          setNewName('')
          setNewNumber('')
        })
    }
    else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === personObject.name)
        const changedPerson = {...person, number: newNumber}
        phonebookService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
          })
      }
      setNewName('')
      setNewNumber('')
      
    }
    console.log('button clicked', event.target)
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    
    if (window.confirm(`Delete ${person.name} ?`)) {
      phonebookService
      .delete_(id)
      .then(setPersons(persons.filter(p => p.id !== id)))
    }
    
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
      <ul>
        {personToShow.map(person =>
          <Person key={person.id} name={person.name} number={person.number} deletePerson={() => deletePerson(person.id)}/>  
        )}
      </ul>
    </div>
  )
}

export default App
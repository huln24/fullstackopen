const PersonForm = ({addPerson, newName, handleNameAdd, newNumber, handleNumberAdd}) => {
    return (
      <form onSubmit={addPerson}>
        <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNameAdd}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberAdd}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

  export default PersonForm;
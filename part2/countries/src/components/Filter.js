const Filter = ({handleSearch}) => {
    return (
        <div>
            Find countries <input onChange={handleSearch}/>
        </div>
    )
}

export default Filter
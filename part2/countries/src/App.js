import {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import DisplayInfo from './components/DisplayInfo'


const App = () => {
    const [search, setSearch] = useState('')
    const [countries, setCountries] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        axios  
            .get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(response => {
                setCountries(response.data.map(country => country.name.common))
            })
    }, [])

    if (!countries) {
        return null
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
        setSelectedCountry(null)
    }

    const countryToShow = search === '' 
    ? []
    : countries.filter(country => country.toLowerCase().includes(search.toLowerCase()))

    if (countryToShow.length === 1) {
        axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryToShow[0]}`)
            .then(response => {
                setSelectedCountry(response.data)
            })
        
    }

    return (
        <div>
            <Filter handleSearch={handleSearch}/>
            <div>
                {countryToShow.length > 10 && <p>Too many matches, specify another filter</p>}
                {selectedCountry !== null && <DisplayInfo country={selectedCountry}/>}
                {(countryToShow.length < 10 && countryToShow.length > 1) && 
                    <ul>
                        {countryToShow.map(c => 
                            <li>{c}</li>)}
                    </ul>
                }
                
            </div>
        </div>
    )
}

export default App
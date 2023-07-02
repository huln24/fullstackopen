const DisplayInfo = ({country}) => {
    const name = country.name.common
    const capital = country.capital
    const area = country.area
    const languages = country.languages
    const flag = country.flags.png

    return (
        <div>
            <h2>{name}</h2>
            <p>Capital: {capital}<br/>
                Area: {area}</p>
            <div>
                <h4>Languages:</h4>
                <ul>
                    {Object.entries(languages).map(([k ,v]) => 
                        <li>{v}</li>)}
                </ul>
            </div>
            <div>
                <img src={flag} alt="flag"/>
            </div>
        </div>
    )
}

export default DisplayInfo
const List = ({ countries, handleCountrySelect }) => {
    return (
        <ul>
            {countries.map(country =>
                <li key={country.name.official}>
                    {country.name.official}
                    <button onClick={() => handleCountrySelect(country.name.official)}>show</button>
                </li>)}
        </ul>
    )
}

export default List
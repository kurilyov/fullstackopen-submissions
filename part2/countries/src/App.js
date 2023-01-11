import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import List from "./components/List";

const App = () => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const countriesToRender = countries.filter(country =>
    country.name.official
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value)

    setSelectedCountry('')
  }

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
  }

  return (
    <div className="App">
      <form>
        <label htmlFor="search">Find countries </label>
        <input
          id="search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </form>
      {searchQuery === ''
        ? ''
        : countriesToRender.length < 10
          ? countriesToRender.length === 1
            ? <Country country={countriesToRender[0]} />
            : selectedCountry === ''
              ? <List countries={countriesToRender} handleCountrySelect={handleCountrySelect} />
              : <Country country={countriesToRender.filter(country => country.name.official.includes(selectedCountry))[0]} />
          : 'Too many matches, specify another filter'
      }
    </div>
  );
}

export default App;

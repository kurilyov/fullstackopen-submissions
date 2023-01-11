import axios from "axios"
import { useEffect, useState } from "react"

const Country = ({ country }) => {
    const [weather, setWeather] = useState({ temp: '', wind: '', icon: '' })

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setWeather({
                    temp: res.data.main.temp,
                    wind: res.data.wind.speed,
                    iconURL: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
                })
            })
    }, [country])

    return (
        <div>
            <h2>{country.name.official}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            <ul>
                {Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)}
            </ul>
            <img
                src={country.flags.svg}
                alt={country.name.official}
                width={120}
            />
            <h3>Weather in {country.capital[0]}</h3>
            <p>Temperature {weather.temp} Celsius</p>
            <p>Wind {weather.wind} m/s</p>
            <img src={weather.iconURL} alt="" />
        </div>
    )
}

export default Country
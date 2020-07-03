import React from 'react'


const Weather = ({description, city, country, error, temperature, time}) => {
    return (
        <div>
            {city && country && <p>{city}, {country}</p>}
            {time && <p> Current Time: {time}</p>}
            {temperature && <p>{temperature}  &deg;F</p>}
            {description && <p> Current Condition: {description}</p>}
            {error && <p>{error}</p>}
        </div>
)

}
export default Weather;
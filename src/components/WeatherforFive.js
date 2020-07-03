import React from 'react'

const Weatherforfive = ({description, city, error, temperature}) => {
    return (
        <div>
            {city && <p>{city}, </p>}
            {temperature && <p>{temperature}  &deg;F</p>}
            {description && <p> Current Condition: {description}</p>}
            {error && <p>{error}</p>}
         </div>
) 

}
export default Weatherforfive;
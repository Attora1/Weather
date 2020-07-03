import React,{useState} from 'react';
import Form from './form1/Form1';
import Weather from './Weather';
import Nav from './navbar/Navbar';

function OneDay() {
  const [weather,setWeather] = useState([])
  const APIKEY = '9e589ccb0b9bf125c2f2a918fd3d5fca'
  console.log("test")
 function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
      e.preventDefault()
    const apiData =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data) 
      .then((apidata)=>{
        console.log(apidata)
        if(city && country) {
        setWeather({
          data: apidata,
          time: apidata.dt,
          city: apidata.city,
          country:  apidata.country,
          description: apidata.weather[0].description,
          temperature: kToF(apidata.main.temp),
          error:""
        })
      }
      else{
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          error: "Please Input City and Country"
        })
      }
      })

  }

  function kToF(kelvin){ 
    console.log(kelvin)
    const temp_f = kelvin * 9/5 - 459.67
    return +temp_f.toFixed(2)



  }

  return (
    <div>
      <Nav />
      <Form getWeather={fetchData} /> 
       <Weather
        city={weather.city}
        country={weather.country}
        time={weather.time}
        description={weather.description}
        temperature={weather.temperature}
        error={weather.error}
      /> 
    </div>
  );

 
}
export default OneDay;
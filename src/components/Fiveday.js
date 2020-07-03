import React,{useState} from 'react';
import Forms from './form2/Form2';
import Weather from './WeatherforFive';
import Nav from './navbar/Navbar';
function Week(){
    const [weather,setWeather] = useState([])
    const APIKEY = '9e589ccb0b9bf125c2f2a918fd3d5fca'
    let list = []
    function fetchData(e) {
        const city = e.target.elements.city.value
          e.preventDefault()
        const apiData =  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`)
          .then( res => res.json())
          .then(data => data) 
          .then((apidata)=>{
            list = apidata.list

            if(city) {
                setWeather({
                  data: apidata,
                  city: apidata.city,
                //   description: apidata.weather[0].description,
                //   temperature:kToF(apidata.main.temp),
                  error:"",
                })
                
              }
              else{
                setWeather({
                  data: '',
                  city: '',
                  description: '',
                  temperature: '',
                  error: "Please Input City"
                })
              }
            
              let weekly_forecast = []
              let daily_forecast = []
              for(let i = 0; i < apidata['list'].length; ++i) {
                daily_forecast.push(apidata.list[i])
                if( daily_forecast.length == 8 ) {
                  weekly_forecast.push(daily_forecast)
                  daily_forecast = []
                }
              } 
        
        })

        
        
         
       
          
   }


   
  return(
        <div>
          <Nav />
            <h1> Hello</h1>
                <Forms getWeather={fetchData} />
                    <Weather
                   
                    /> 
            {console.log(weather.data)}
        </div>
    );
  
    function kToF(kelvin){ 
      console.log(kelvin)
      const temp_f = kelvin * 9/5 - 459.67
      return +temp_f.toFixed(2)
    }
    
    
}
export default Week;
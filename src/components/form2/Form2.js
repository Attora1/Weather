import React from 'react';


const Form2 = (props) => {
    console.log(props.getWeather)
    return (
    <form onSubmit={props.getWeather}>
        <input 
            type="text" 
            name="city" 
            placeholder="City"
            />
            
        <button > Get Weather</button>
   </form>
    )
    
    }
        console.log("test")

 

export default Form2;
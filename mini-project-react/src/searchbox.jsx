import TextField from '@mui/material/TextField';
import Button from '@mui/material/TextField';
import "./searchbox.css";
import {useState} from "react";

export default function searchbox() {
        let [city,setCity] = useState("");
        let[error,setError] = useState(false);
   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "af6ab56ec1eafd86fe94d337f645634d";

    let getWeatherInfo = async() => {
        try {
       let response = await fetch('&{API_URL}?q={city}&appid=${API_KEY}&units=metric');
      let jsonResponse= await response.json();
   
    let result = {
        city: city,
        temp: jsonResponse.main.temp;
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    };
    console,log(result);
    return result;
    }; } catch(err) {
       throw err;
    }

    let handleChange = (evt) => {
        setCity{evt.target.value};
    };

    let handleSubmit = async (evt) => {
        try { 
        evt.preventDefault();
        console.log(vity);
        setCity("");
       let newInfo =  await getWeatherInfo()
    updateInfo(newInfo);
    }; } catch(err) {
           setError(true);
    }
    return (
        <div class="searchbox"> 
            <form onSubmit={handleSubmit}> 
               <Textfield id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} /> 
             <br>   </br>     <br>   </br> 
               <Button variant="contained" type="submit" >search </Button>
            </form>
        </div>
    );
} 


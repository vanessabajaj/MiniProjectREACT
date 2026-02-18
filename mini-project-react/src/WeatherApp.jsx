import searchbox from "./searchbox";
import infoBox from "./infoBox";

export default function WeatherApp() {
    const[weatherInfo,setWeatherInfo]= useState {{
         city:"delhi",
        feelsLike: 24.84 ,
        humidity : 47,
    temp : 25.05, 
    tempMax :25.05 ,
    weather: "haze",
    }};

    let updateInfo = (newInfo) => {
        setWeatherInfo(result);
    }
    return ( <div style={{textAlign:"center"}}>
         <h2> Weather App by Default </h2>
         <searchbox updateInfo={updateInfo} /> 
         <infoBox info = {weatherInfo} /> 

         </div>);
}
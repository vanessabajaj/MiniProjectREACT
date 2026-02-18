
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
export default function infoBox() {
    let info ={
        city:"delhi",
        feelsLike: 24.84 ,
        humidity : 47,
    temp : 25.05, 
    tempMax :25.05 ,
    weather: "haze",
    };
    return(<div className="infoBox"><h1>Weather Info </h1>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' component={"span"}}}>
         <p>Temperature = {info.temp}&deg;C  </p>
            <p> humidity= {info.humidity} </p> 
         <p>Min Temp = {info.tempMin}&deg;C  </p>
          <p> Max Temp = {info.tempMax}&deg;C  </p>
           <p> the weather can be described as <i> {info.weather} </i> and feels like {info.feelslike}&deg;C </p> 
        </Typography>
      </CardContent>
      
    </Card>
    
    </div>);
}
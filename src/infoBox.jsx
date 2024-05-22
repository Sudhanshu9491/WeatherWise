import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './infoBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function Infobox({info}) {
  const INIT_URL="https://cdn.zeebiz.com/sites/default/files/2023/07/28/253598-delhi-weather-today-rain.jpg?im=FitAndFill=(1200,900)";

  const HOT_URL="https://www.cdc.gov/nceh/features/extremeheat/extremeheat_456px.jpg?_=92916";
  const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?t=st=1713119467~exp=1713123067~hmac=6722ccbcffa8698398859a2574bf9973f61c03925cc72309bb505ac060293f72&w=1060";

  return (
    <div>
      {/* <h1>Wheather Data of {info.city}</h1> */}
      <div className="container">
        <Card sx={{ width: 300,height:370 }} style={{backgroundColor:"white",borderRadius:"23px"}}>
          <CardMedia
            sx={{ height: 140}}
            image={info.humidity>80?RAIN_URL:info.temperature>15?HOT_URL:COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;{info.humidity>80?<WbSunnyIcon/>:info.temperature>15?<AcUnitIcon/>:<ThunderstormIcon/>}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temperature}&deg;C</p>
              <p>Temperature Max = {info.tempMax}&deg;C</p>
              <p>Temperature Min = {info.tempMin}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Wheather = {info.weather}</p>
              <p>Feels Like = {info.feelsLike}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

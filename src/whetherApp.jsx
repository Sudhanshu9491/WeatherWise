import Search from "./search";
import Infobox from "./infoBox";
import { useState } from "react";
// import { borderRadius } from "@mui/system";
export default function WheatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "---",
    temperature: 0,
    humidity: 0,
    tempMax: 0,
    tempMin: 0,
    feelsLike: "",
    weather: "---",
  });

  let updateInfo=(result)=>{
    setWeatherInfo(result);
  }
  return (
    <div style={{backgroundColor:"grey",borderRadius:"23px",padding:"20px"}}>
    <div>
      <span style={{backgroundColor:"#d6c296",borderRadius:"10px",padding:"20px",fontSize:"35px"}} >Weather Wise</span>
      <Search updateInfo={updateInfo} />
      <Infobox info={weatherInfo}/>
      </div>
    </div>
  );
}

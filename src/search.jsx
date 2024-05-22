import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { color } from "@mui/system";

export default function Search({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState("");
  let [errorStyle, setErrorStyle] = useState({});
  let [info, setInfo] = useState({
    city: "",
    temperature: "",
    humidity: "",
    tempMax: "",
    tempMin: "",
    feelsLike: "",
    weather: "",
  });
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "80dd1a673d8019e306ddd20d361e72d1";

  let getWheather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let getResponse = await response.json();
      console.log(getResponse);
      let res = {
        city: city,
        temperature: getResponse.main.temp,
        humidity: getResponse.main.humidity,
        tempMax: getResponse.main.temp_max,
        tempMin: getResponse.main.temp_min,
        feelsLike: getResponse.main.feels_like,
        weather: getResponse.weather[0].description,
      };
      console.log(res);
      return res;
    } catch (error) {
      throw error;
    }
  };

  let handle = (event) => {
    setCity(event.target.value);
  };

  let submit = async (event) => {
    try {
      event.preventDefault();
      let info = await getWheather();
      updateInfo(info);
      setError("");
      setErrorStyle({});
    } catch (error) {
      setError("This city is not present in our API");
      setErrorStyle({
        backgroundColor: "black",
        color: "Red",
        padding: "10px",
        borderRadius: "10px",
      });
      setInfo({
        city: "---",
        temperature: 0,
        humidity: 0,
        tempMax: 0,
        tempMin: 0,
        feelsLike: "",
        weather: "---",
      });
    }
  };

  let refresh = () => {
    setInfo({
      city: "",
      temperature: "",
      humidity: "",
      tempMax: "",
      tempMin: "",
      feelsLike: "",
      weather: "",
    });
  };

  return (
    <div style={{ marginTop: "45px" }}>
      {/* <h1>Check Your City Wheather</h1> */}
      <form action="/" onSubmit={submit}>
        <TextField
          id="city"
          placeholder="City Name"
          required
          label="Search Your City"
          variant="outlined"
          value={city}
          onChange={handle}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Get Details
        </Button>
        <br />
        <br />
        {/* <Button variant="contained" onClick={refresh} >Refresh</Button> */}
      </form>
      <span style={errorStyle}>{error}</span>
    </div>
  );
}

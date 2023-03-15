import React, { Fragment, useState, useEffect } from "react";
import cloudy from "../assets/cloudy.mp4";
import sunny from "../assets/sunny.mp4";
import rainy from "../assets/rainy.mp4";
import winter from "../assets/winter.mp4";
import fog from "../assets/fog.mp4";

const Background = (props) => {
  const [Weather, setWeather] = useState(sunny);

  const conditions = props.info.current;
  const temp = conditions.temp_c;
  const rain = conditions.precip_mm;
  const cloud = conditions.cloud;
  var mausam = conditions.condition.text;

  useEffect(() => {
    if (mausam.search("rain") !== -1 || mausam.search("showers") !== -1)
      setWeather(rainy);
    else if (mausam.search("Fog") !== -1 || mausam.search("Mist") !== -1)
      setWeather(fog);
    else if (mausam.search("Snow") !== -1) setWeather(winter);
    else if (cloud > 90 || mausam.search("cloudy") !== -1) setWeather(cloudy);
    else if (temp < 8) setWeather(winter);
    else if (temp > 8) setWeather(sunny);
  }, [temp, rain, Weather, cloud, mausam]);

  return (
    <Fragment>
      <video src={Weather} className="back-video" loop autoPlay muted />
    </Fragment>
  );
};
export default Background;

/*
{
    "location": {
        "name": "Lucknow",
        regio: "Utar Pradesh",
        "contry: Inda",
        "la" 2685
        "lon": 80.92,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1675735015,
        "localtime": "2023-02-07 7:26"
    },
    "current": {
        "last_updated_epoch": 1675734300,
        "last_updated": "2023-02-07 07:15",
        "temp_c": 13.0,
        "temp_f": 55.4,
        "is_day": 0,
        "condition": {
            "text": "Mist",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
            "code": 1030
        },
        "wind_mph": 2.2,
        "wind_kph": 3.6,
        "wind_degree": 10,
        "wind_dir": "N",
        "pressure_mb": 1010.0,
        "pressure_in": 29.83,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 94,
        "cloud": 50,
        "feelslike_c": 12.4,
        "feelslike_f": 54.4,
        "vis_km": 2.0,
        "vis_miles": 1.0,
        "uv": 1.0,
        "gust_mph": 11.2,
        "gust_kph": 18.0,
        "air_quality": {
            "co": 867.7999877929688,
            "no2": 13.699999809265137,
            "o3": 41.5,
            "so2": 2.299999952316284,
            "pm2_5": 114.0,
            "pm10": 150.1999969482422,
            "us-epa-index": 4,
            "gb-defra-index": 10
        }
    }
}
*/

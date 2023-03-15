import { Divider } from "@mui/material";
const Weather = (props) => {
  const list = props.info.current;
  const location = props.info.location;

  // props.info.current.temp_c
  return (
    <div className="display">
      <div className="location">
        <h1>
          {location.name},{location.region},{location.country}
        </h1>
      </div>
      <div className="grid-container">
        <div>
          <p>
            Weather=<span>{list.condition.text}</span>
          </p>

          <p>
            Temperature=<span>{list.temp_c}</span>
          </p>
          <p>
            Feels Like=<span>{list.feelslike_c}</span>
          </p>
        </div>
        <Divider orientation="vertical" flexItem />

        <div>
          <p>
            {" "}
            Precipitation=<span>{list.precip_mm}</span>
          </p>
          <p>
            {" "}
            Humidity=<span>{list.humidity}</span>
          </p>
          <p>
            {" "}
            Wind Speed=<span>{list.wind_mph}</span>
          </p>
          <p>
            Cloud=<span>{list.cloud}</span>
          </p>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <p>
            {" "}
            UV=<span>{list.uv}</span>
          </p>
          <p>
            Ozone=<span>{list.air_quality.o3.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Weather;

/*
{
    "location": {
        "name": "Lucknow",
        "region": "Uttar Pradesh",
        "country": "India",
        "lat": 26.85,
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

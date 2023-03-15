import React, { useState, useEffect, useCallback, Fragment } from "react";
import Background from "./components/Background";
import Weather from "./components/Weather";
import Input from "./UI/Input";

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, newLocation] = useState("New Delhi");

  const locationHandler = (place) => {
    newLocation(place);
  };

  const fetchweatherHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      //console.log(location);
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=yes`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      //console.log(data);
      setWeather(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [location]);

  useEffect(() => {
    fetchweatherHandler();
  }, [fetchweatherHandler]);

  let content = <p>Found no weather.</p>;
  let background = <p>No Background</p>;

  if (weather && Object.keys(weather).length > 0) {
    content = weather && <Weather info={weather} />;
    background = weather && <Background info={weather} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <div className="container">
        <h1 className="heading">Accu Weather</h1>
        <Input newLoc={locationHandler} />
        <article>{content}</article>
      </div>
      <article>{background}</article>
    </Fragment>
  );
}

export default App;

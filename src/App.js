import "./App.css";
import { Weather } from "./Weather.js";
import { weather } from "./data";

function App() {
  return (
    <div>
      <h1>Weather</h1>
      <div className="container">
        {weather.map((place) => {
          return (
            <Weather
              city={place.city}
              temp={place.temp}
              description={place.description}
              high={place.high}
              low={place.low}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

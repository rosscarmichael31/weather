// import { weather } from "./data.js";
import { ImageSelector } from "./ImageSelector";
console.log();
export const Weather = (props) => {
  return (
    <div className="weather">
      <div className="city">{props.city}</div>
      <div className="temp"> {props.temp}&#xb0;</div>
      <div className="description"> {props.description} </div>
      <div className="high-low">
        H:{props.high}&#xb0; L:{props.low}&#xb0;
      </div>
      <ImageSelector description={props.description} />
    </div>
  );
};

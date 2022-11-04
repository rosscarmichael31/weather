export const ImageSelector = (props) => {
  if (
    props.description === "Sunny" ||
    props.description === "Mostly clear" ||
    props.description === "Clear"
  ) {
    return (
      <img className="img-sun" src={require("./img/sun.png")} alt="The sun" />
    );
  } else if (
    props.description === "Cloudy" ||
    props.description === "Partly cloudy"
  ) {
    return (
      <img
        className="img-cloud"
        src={require("./img/cloud.png")}
        alt="Clouds"
      />
    );
  }
};

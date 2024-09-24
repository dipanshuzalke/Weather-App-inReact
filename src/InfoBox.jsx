import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox() {
  const INIT_URL =
    "https://t4.ftcdn.net/jpg/01/72/45/15/360_F_172451526_syisinMTQyiYH5ej15fC6Vpi2biW7CRp.jpg";

  let info = {
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INIT_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>Weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

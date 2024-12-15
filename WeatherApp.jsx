import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox"; 

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: -4.1,
        humidity: 100,
        temp: -2,
        tempmax: -2,
        tempmin: -2,
        weather: "haze",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="WeatherApp">
            <h1>Weather App Created By Bablu Kumar</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}

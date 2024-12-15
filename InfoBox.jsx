import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const imageUrls = {
        rain: "https://plus.unsplash.com/premium_photo-1667516468789-81a6ba214724?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hot: "https://plus.unsplash.com/premium_photo-1688804790113-809f21d2e7cc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cold: "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };

    const getImage = () => {
        if (info.humidity > 80) return imageUrls.rain;
        if (info.temp > 15) return imageUrls.hot;
        return imageUrls.cold;
    };

    const getIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon />;
        if (info.temp > 15) return <WbSunnyIcon />;
        return <AcUnitIcon />;
    };

    return (
        <div className="InfoBox">
            <br />
            <div className="CardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={getImage()}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {getIcon()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Min Temp: {info.tempmin}&deg;C</p>
                            <p>Max Temp: {info.tempmax}&deg;C</p>
                            <p>
                                The weather can be described as <i>{info.weather}</i>, feels like {info.feels_like}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

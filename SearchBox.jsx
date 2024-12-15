import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Searchbox({updateInfo}) {
    let [city, setCity] = useState("");
    const[Err,setErr] = useState("")

    const API_KEY = "4f7636509f8b9f60d0b15fec51b9d224";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

    const getWeatherInfo = async () => {
        try{
            const response = await fetch(`${baseUrl}?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log(data);

        let result = {
            city: data.name || "N/A",
            temp: data.main.temp,
            tempmin: data.main.temp_min,
            tempmax: data.main.temp_max,
            humidity: data.main.humidity,
            feels_like: data.main.feels_like,
            weather: data.weather[0].description,
        };
        console.log(result);
        return result;
        }catch(Err){
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
       let newinfo = await getWeatherInfo();
       updateInfo(newinfo)
       }catch(err){
        setErr(err)

     
       }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
             
                <TextField
                    id="city"
                    label="CityName"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {Err && <p style={{ color: 'red' }}>No Such place Exists!</p>}

            </form>
        </div>
    );
}

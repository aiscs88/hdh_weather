import React, { useEffect, useState } from 'react'

import './App.css'
import { getWeatherData } from './api'



function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    getData()
  }, [])



  const getData = () => {
    getWeatherData().then((d) => {
      console.log(d)
      setData(d);
    });
  }

  return (
    <div className="app">
      <div className="container">

        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>



        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>

            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.temp_min.toFixed()}°C</p> : null}
              <p>Min</p>
            </div>

            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.temp_max.toFixed()}°C</p> : null}
              <p>Max</p>
            </div>


            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}


export default App;
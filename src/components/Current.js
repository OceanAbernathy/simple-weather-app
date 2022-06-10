import React, { useEffect } from 'react';
import axios from 'axios';
import weatherData from './weatherData.js';
import Icon from './Icon.js';

export default function Current(props) {
  const locationKey = '341804';
  const apiKey = '1GDTCke9q5JyLD4nLlBDxpgPzYG1G2LG';
  const [results, setResults] = React.useState([]);

  useEffect(() => {
    axios
      .get(
        'http://dataservice.accuweather.com/currentconditions/v1/' +
          locationKey +
          '?apikey=' +
          apiKey +
          '&details=true'
      )
      .then((response) => {
        setResults(response.data[0]);
      });
  }, []);
  console.log(results);

  const weatherElements = weatherData.map((data) => {
    return (
      <div className='weather__card' key={data.id}>
        <div className='weather__card__title__container'>
          <h5 className='weather__card__title'>{data.title}</h5>
          <h6 className='weather__card__time'>{data.time}</h6>
        </div>
        <div
          className={`weather__card__icon ${
            data.title == 'Tonight' ? 'night' : 'day'
          }`}
        >
          <Icon icon={data.icon} />
        </div>
        <div className='weather__card__temp__container'>
          <h3 className='weather__card__temp'>{data.temp}</h3>
          <p className='weather__card__state'>{data.state}</p>
        </div>
        <p className='weather__card__condition'>{data.condition}</p>
      </div>
    );
  });

  return (
    <div>
      <div className='header'>
        <h1 className='location'>Gilbert, Arizona</h1>
        <h2>Weather Outlook</h2>
      </div>
      <div className='weather__card__container'>{weatherElements}</div>
      {/* <Icon icon={results.WeatherIcon} /> */}
    </div>
  );
}

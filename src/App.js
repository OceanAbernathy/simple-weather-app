import React, { useEffect } from 'react';
import axios from 'axios';
import Current from './components/Current.js';
import Today from './components/Today.js';
import Tonight from './components/Tonight.js';

export default function App() {
  const locationKey = '341804';
  const apiKey = '1GDTCke9q5JyLD4nLlBDxpgPzYG1G2LG';
  const [current, setCurrent] = React.useState([]);
  const [daily, setDaily] = React.useState([]);

  useEffect(() => {
    axios
      .get(
        'http://dataservice.accuweather.com/currentconditions/v1/' +
          locationKey +
          '?apikey=' +
          apiKey +
          '&details=true&metric=false'
      )
      .then((response) => {
        setCurrent(response.data[0]);
      });
    axios
      .get(
        'http://dataservice.accuweather.com/forecasts/v1/daily/1day/' +
          locationKey +
          '?apikey=' +
          apiKey +
          '&details=true&metric=false'
      )
      .then((response) => {
        setDaily(response.data.DailyForecasts[0]);
      });
  }, []);
  console.log(current, 'current');
  console.log(daily, 'daily');

  return (
    <div className='App'>
      <div className='header__container'>
        <div className='header'>
          <h1 className='location'>Gilbert, Arizona</h1>
          <h2>Weather Outlook</h2>
        </div>
      </div>
      <div className='weather__card__container'>
        <Current
          icon={current.WeatherIcon}
          temp={current.Temperature.Imperial.Value}
          state={current.Temperature.Imperial.Unit}
          condition={current.WeatherText}
        />
        <Today
          icon={daily.Day.Icon}
          temp={daily.Temperature.Maximum.Value}
          condition={daily.Day.IconPhrase}
        />
        <Tonight
          icon={daily.Night.Icon}
          temp={daily.Temperature.Minimum.Value}
          condition={daily.Night.IconPhrase}
        />
      </div>
    </div>
  );
}

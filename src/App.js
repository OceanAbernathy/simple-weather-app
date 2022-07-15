import React, { useState } from 'react';
import axios from 'axios';

import Search from './components/Search';
import Current from './components/Current.js';
import Today from './components/Today.js';
import Tonight from './components/Tonight.js';

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [current, setCurrent] = useState([]);
  const [daily, setDaily] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getWeather(locationKey) {
    axios
      .get(
        'http://dataservice.accuweather.com/currentconditions/v1/' +
          locationKey +
          '?apikey=' +
          apiKey +
          '&details=true&metric=false'
      )
      .then((response) => {
        const responseData = response.data[0];
        setCurrent(responseData);
        axios
          .get(
            'http://dataservice.accuweather.com/forecasts/v1/daily/1day/' +
              locationKey +
              '?apikey=' +
              apiKey +
              '&details=true&metric=false'
          )
          .then((response) => {
            const responseData = response.data.DailyForecasts[0];
            setDaily(responseData);
            setIsLoading(false);
          });
      });
  }

  return (
    <div className='App'>
      <Search getWeather={getWeather} />

      {!isLoading && (
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
      )}
    </div>
  );
};

export default App;

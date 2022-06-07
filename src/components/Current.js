import React, { useEffect } from 'react';
import axios from 'axios';
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

  return (
    <div>
      <h1>Curernt Conditions</h1>
      <h2>Gilbert, AZ</h2>
      {results.Temperature.Imperial.Value}
      <Icon icon={results.WeatherIcon} />
    </div>
  );
}

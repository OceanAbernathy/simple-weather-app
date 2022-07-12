import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ props, getWeather }) => {
  const apiKey = '1GDTCke9q5JyLD4nLlBDxpgPzYG1G2LG';
  const [results, setResults] = useState([]);

  function handleClick(key) {
    document.getElementById('locationsearch').value = '';
    setResults([]);
    getWeather(key);
  }

  function search(event) {
    let search = event.target.value;
    axios
      .get(
        'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=' +
          search +
          '&apikey=' +
          apiKey
      )
      .then((response) => {
        console.log(response);
        if (response.data.length) {
          let data = response.data.map((item) => {
            return (
              <div
                key={item.Key}
                className='search__item'
                onClick={() => handleClick(item.Key)}
              >
                {item.LocalizedName}, {item.AdministrativeArea.ID}
              </div>
            );
          });
          setResults(data);
        } else {
          setResults([]);
        }
      });
  }

  return (
    <div className='header__container'>
      <h1>Weather App</h1>
      <div className='search__container'>
        <input
          type='search'
          placeholder='Search'
          id='locationsearch'
          name='locationsearch'
          className='search__box'
          onChange={search}
        />
        <div className='search__results'>{results}</div>
      </div>
    </div>
  );
};

export default Search;

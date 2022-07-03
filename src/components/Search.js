import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const apiKey = '1GDTCke9q5JyLD4nLlBDxpgPzYG1G2LG';
  const [results, setResults] = React.useState([]);

  function handleChange(event) {
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
              <div key={item.Key} className='search__item'>
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
          onChange={handleChange}
        />
        {results}
      </div>
    </div>
  );
};

export default Search;

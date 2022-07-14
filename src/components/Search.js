import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ props, getWeather }) => {
  const apiKey = '1GDTCke9q5JyLD4nLlBDxpgPzYG1G2LG';
  const [results, setResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  let resultsDivs;

  function handleClick(key) {
    document.getElementById('locationsearch').value = '';
    setSearchResults([]);
    setResults([]);
    getWeather(key);
  }

  function search(event) {
    let search = event.target.value;
    if (search.length > 2) {
      axios
        .get(
          'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=' +
            search +
            '&apikey=' +
            apiKey
        )
        .then((response) => {
          setSearchResults(response.data);
          resultsDivs = response.data
            .filter((item) => item.Country.ID === 'US')
            .map((item) => {
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
          setResults(resultsDivs);
        });
    } else if (search.length <= 2) {
      setSearchResults([]);
    }
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
        {searchResults && <div className='search__results'>{results}</div>}
      </div>
    </div>
  );
};

export default Search;

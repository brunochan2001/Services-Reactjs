import React, { useState } from 'react';
import { useDebounce } from 'react-use';
import './index.css';

const Search = ({ services, setServicesData }) => {
  const [val, setVal] = useState('');
  const [,] = useDebounce(
    () => {
      SearchData(val);
    },
    1000,
    [val]
  );

  const SearchData = value => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setServicesData(services);
    } else {
      const searchServices = services.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowerCaseValue)
        );
      });
      setServicesData(searchServices);
    }
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        value={val}
        placeholder="Buscar tu servicios"
        onChange={({ currentTarget }) => {
          setVal(currentTarget.value);
        }}
        className="search-input"
      />
    </div>
  );
};

export default Search;

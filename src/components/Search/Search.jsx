import React, { useState } from 'react';
import { useDebounce } from 'react-use';
import TextField from '@mui/material/TextField';
import './index.css';

const Search = ({ services, setServicesData }) => {
  const [val, setVal] = useState('');
  const [,] = useDebounce(
    () => {
      SearchData(val);
    },
    400,
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
    <>
      <TextField
        fullWidth
        label="Buscador"
        id="fullWidth"
        className="search-input"
        onChange={({ currentTarget }) => {
          setVal(currentTarget.value);
        }}
      />
    </>
  );
};

export default Search;

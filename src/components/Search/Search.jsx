import React, { useState } from 'react';
import { useDebounce } from 'react-use';
import './index.css';

const Search = () => {
  const [val, setVal] = useState('');
  const [,] = useDebounce(() => {}, 1000, [val]);
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

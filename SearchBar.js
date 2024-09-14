import React, { useState } from 'react';

// Sample JSON Data
const countries = [
  {
    "country": "United States",
    "capital": "Washington, D.C.",
  },
  {
    "country": "Canada",
    "capital": "Ottawa",
  },
  {
    "country": "Brazil",
    "capital": "Brasília",
  },
  // Add all other countries here...
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Function to handle the input change and filter the data
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const results = countries.filter((item) =>
      item.country.toLowerCase().includes(value) ||
      item.capital.toLowerCase().includes(value)
    );
    
    setFilteredData(results);
  };

  return (
    <div className="search-container" style={{ width: '300px', margin: '0 auto' }}>
      <input
        type="text"
        placeholder="Search by country or capital..."
        value={query}
        onChange={handleInputChange}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      {query && (
        <ul
          style={{
            listStyleType: 'none',
            padding: '10px',
            margin: '0',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#fff',
          }}
        >
          {filteredData.length ? (
            filteredData.map((item, index) => (
              <li key={index} style={{ padding: '5px 0', cursor: 'pointer' }}>
                {item.country} - {item.capital}
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

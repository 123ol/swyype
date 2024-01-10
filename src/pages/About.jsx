import React, { useState } from 'react';

function About() {
  const [filter, setFilter] = useState('All'); // State to manage the filter
  const [searchQuery, setSearchQuery] = useState(''); // State to manage the search query

  const getTextColor = (text) => {
    return text === 'Successful' ? 'green' : text === 'Unsuccessful' ? 'red' : 'black';
  };

  const handleFilter = (filterType) => {
    setFilter(filterType); // Set the filter type based on the button clicked
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Set the search query
  };

  const renderRows = () => {
    // Data for the rows
    const rows = [
      { id: 1, asset: 'Toronet', walletAddress: 'a6d64058-511e-45b9-87ac-d', timeStamp: '20:30', remark: 'Successful' },
      { id: 2, asset: 'Toronet', walletAddress: 'a6d64058-511e-45b9-87ac-d', timeStamp: '20:30', remark: 'Unsuccessful' },
      { id: 3, asset: 'Toronet', walletAddress: 'a6d64058-511e-45b9-87ac-d', timeStamp: '20:30', remark: 'Unsuccessful' },      
      { id: 4, asset: 'Toronet', walletAddress: 'a6d64058-511e-45b9-87ac-d', timeStamp: '20:30', remark: 'Successful' },
      { id: 5, asset: 'Toronet', walletAddress: 'a6d64058-511e-45b9-87ac-d', timeStamp: '20:30', remark: 'Unsuccessful' },
      { id: 6, asset: 'Toronet', walletAddress: 'a6d64058-511e-45b9-87ac-d', timeStamp: '20:30', remark: 'Successful' },
      // Add more rows as needed
    ];

    // Apply filter if set
    let filteredRows = rows;
    if (filter !== 'All') {
      filteredRows = rows.filter((row) => row.remark === filter);
    }

    // Apply search if query is present
    if (searchQuery) {
      filteredRows = filteredRows.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    return filteredRows.map((row) => (
      <tr key={row.id} className="ttable">
        <td>{row.id}</td>
        <td>{row.asset}</td>
        <td>{row.walletAddress}</td>
        <td>{row.timeStamp}</td>
        <td style={{ color: getTextColor(row.remark) }}>{row.remark}</td>
        <td>...</td>
      </tr>
    ));
  };

  return (
    <div style={{ width: '100%' }}>
      <div className='transhead'>
        <div className='transright'>
          <h1>Transaction history</h1>
          <p>All transactions are shown below and can be sorted</p>
          <button>Download receipts</button>
        </div>
        <div className='transleft'>
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder='Search'
          onChange={handleSearch}
        />
       <select name="filter" id="filter" onChange={(e) => handleFilter(e.target.value)}>
  <option value="Filter" disabled selected>Filter</option>
  <option value="All">All</option>
  <option value="Successful">Successful</option>
  <option value="Unsuccessful">Unsuccessful</option>
</select>

      </div>
      </div>

      <div className='main'>
        <table className='transtable'>
          <thead>
            <tr className="ttable" id="header">
              <th>#</th>
              <th>Asset</th>
              <th>Wallet address</th>
              <th>Time stamp</th>
              <th>Remark</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>

    
    </div>
  );
}

export default About;

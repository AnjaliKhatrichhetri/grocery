






















import React, { useState } from 'react';

const SearchBar = () => {
 const [input, setInput] = useState('');
 const [options, setOptions] = useState([]);

 const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length > 0) {
      setOptions([
        'fruits',
        'vegetables',
        'apple',
        'strawberry',
      ]);
    } else {
      setOptions([]);
    }
 };

 const handleOptionClick = (option) => {
    setInput(option);
    setOptions([]);
 };

 return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search..."
      className='ml-2 pl-12' />
      {options.length > 0 && (
        <ul className='h-8'>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option )}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
 );
};

export default SearchBar;
import React, { useState } from 'react';
import useDebounce from './useDebounce';

function App7() {
  return (
    <div>
        <h2>In this file we're discussing about useDebounce hook</h2>
        <SearchBar />
    </div>
  )
}

const useDebounce = (value, delay) => {
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set up a timer to update the debounced value after the specified delay
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clean up the timer if the value changes before the delay has passed
        return () => clearTimeout(timerId);
    }, [value, delay]);

    return debouncedValue;
};

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

    // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

    return (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
        />
    );
};


export default App7;
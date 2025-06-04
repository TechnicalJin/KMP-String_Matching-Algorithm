import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ setResults }) => {
    const [text, setText] = useState('');
    const [pattern, setPattern] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/search', { text, pattern });
            setResults(response.data.matches);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Text" value={text} onChange={(e) => setText(e.target.value)} required />
            <input type="text" placeholder="Enter Pattern" value={pattern} onChange={(e) => setPattern(e.target.value)} required />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;

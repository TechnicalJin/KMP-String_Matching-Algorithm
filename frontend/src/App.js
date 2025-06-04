import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import './styles.css';

const App = () => {
    const [results, setResults] = useState([]);

    return (
        <div className="container fade-in">
            <h1>KMP String Matching</h1>
            <SearchForm setResults={setResults} />
            <Results results={results} />
        </div>
    );
};

export default App;

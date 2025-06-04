import React from 'react';

const Results = ({ results }) => {
    return (
        <div id="output">
            <h3>Results</h3>
            {Array.isArray(results) && results.length > 0 ? (
                <p>Pattern found at indices: {results.join(', ')}</p>
            ) : (
                <p>{results}</p>
            )}
        </div>
    );
};

export default Results;

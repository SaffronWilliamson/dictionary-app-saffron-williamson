import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    //console.log(response.data);
    //console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // Documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = 'ce7c3ee7eo0a7079t0e5079cd0efcb43';
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="title">Dictionary</h1>
      <section className="dictionary-form">
        <h3 className="titleQuestion">What world would you like to search?</h3>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search a word.."
            onChange={handleKeywordChange}
          />
        </form>
        <p className='suggestions'>Suggested words: Travel, Flowers, Pilates, Sourdough</p>
      </section>
      <Results results={results} />
    </div>
  );
}

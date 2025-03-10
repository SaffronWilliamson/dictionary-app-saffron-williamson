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
      <section className="dictionary-form">
        <h1 className="title">English Dictionary</h1>
        <div className="full-search-input">
          <form onSubmit={search}>
            <span className="search-input">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                placeholder="Search a word.."
                onChange={handleKeywordChange}
              />
            </span>
          </form>
        </div>
        <p className="suggestions">
          Suggested words: Travel, Flowers, Pilates, Sourdough
        </p>
      </section>
      <Results results={results} />
    </div>
  );
}

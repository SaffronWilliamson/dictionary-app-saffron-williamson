import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}..`);

    let apiKey = 'ce7c3ee7eo0a7079t0e5079cd0efcb43';
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
// let apiKey = "ce7c3ee7eo0a7079t0e5079cd0efcb43"
// let apiUrl = https://api.shecodes.io/dictionary/v1/define?word=book&key=${apiKey}

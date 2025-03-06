import React from 'react';

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definition.charAt(0).toUpperCase() +
          props.meaning.definition.slice(1)}
      </p>
      <p>
        <em>{props.meaning.example}</em>
      </p>
    </div>
  );
}

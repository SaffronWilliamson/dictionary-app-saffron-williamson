import React from 'react';

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <p className="synonyms">
        <strong>Synonym: </strong>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </p>
    );
  } else {
    return null;
  }
}

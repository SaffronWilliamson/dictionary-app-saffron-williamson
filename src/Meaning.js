import React from 'react';
import Synonyms from './Synonyms';
import Example from './Example';

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
        <em>
          <Example example={props.meaning.example} />
        </em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}

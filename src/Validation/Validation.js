import React from 'react';
import './Validation.css';

const validation = (props) => {
    let textLengthWarning="The text is too short" ;
    if (props.length >= 5 )  
        textLengthWarning = "The text is long enough";
    return (
        <div className='Validation'>
          
            <input type='text' onChange={props.changed} value={props.value} placeholder="Insert string"></input>
            <p>{props.length}</p>
            <h1>{textLengthWarning}</h1>
        </div>
    );
}

export default validation;
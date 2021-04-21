import React from 'react';
import './UserInput.css';

const userInput = (props) => {

    return(
        <div className="input">
            <input className="field" type='text' onChange={props.changed} placeholder={props.userName}></input>
        </div>
    );
}

export default userInput;
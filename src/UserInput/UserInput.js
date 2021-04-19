import React from 'react';
import './UserInput.css';

const Userinput = (props) => {

    return(
        <div className="input">
            <input className="field" type='text' onChange={props.changed} value={props.user}></input>
        </div>
    );
}

export default Userinput;
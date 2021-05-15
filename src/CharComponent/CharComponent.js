import React from 'react';
import './CharComponent.css';

const charComponent=(props)=>{

    return(
        <div className='charComponent' onClick={props.clicked}>

        <h2 >{props.char}</h2>

        </div>
    );
}

export default charComponent;
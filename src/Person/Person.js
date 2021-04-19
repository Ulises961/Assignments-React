import React from 'react';
import './Person.css'

const person = (props) => {
    return (
    <div className='Person'>
        <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old,{props.children} </p>
        <input tyoe='text' onChange={props.changed} value={props.name}></input>
        </div>
    );
}

export default person;
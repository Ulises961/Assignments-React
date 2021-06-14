import React, { useEffect } from 'react';
import classes from './Cockpit.module.css' ;


const Cockpit = (props) => {

    useEffect( () => {
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => { alert("Saved data to the cloud!");},1000);

    }, []);
    let buttonClass = [classes.ButtonStyle] ;
    let assignedClass = [''];
    if(props.showPersons){

        buttonClass.push(classes.Red);
    }
    if(props.users.length <= 2){
      assignedClass.push(classes.red);

    }
    if(props.users.length <=1){
      assignedClass.push(classes.bold);
    }

    return (
    <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClass.join(' ')}>This is really Working</p>
        <button 
            className={buttonClass.join(' ')} 
            onClick={props.clicked}>Switch</button>
    </div>
    );
};
export default Cockpit;
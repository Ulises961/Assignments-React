import React from 'react';
import classes from './Cockpit.module.css' ;


const cockpit = (props) => {
    
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
        <p className={assignedClass.join(' ')}>This is really Working</p>
        <button 
            className={buttonClass.join(' ')} 
            onClick={props.clicked}>Switch</button>
    </div>
    );
};
export default cockpit;
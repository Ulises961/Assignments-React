 
import React, {Component} from 'react';   
import classes from './App.module.css' ;
import Persons from '../components/Persons/Person/Person';



class App extends Component {

  state = {

    users : [
        {name: 'Ulises', age : 29, userId:1},
        {name:'Carlos', age : 28, userId:2},
        {name:'Stephanie', age : 31, userId:3}
    ],
    showPersons : false

  }
  changeUserNameHandler = (event,index) => {
    const personIndex = this.state.users.findIndex( p => {return p.userId === index})
    const users = [...this.state.users];
    const user = {...users[personIndex]};
    user.name = event.target.value;
    users[personIndex] = user;
    this.setState({users :users});
  }
  deleteUserHandler = (index) => {
    const users = [...this.state.users];
    users.splice(index,1);
    this.setState({users: users});
 }

 togglePersonHandler = () => {
  console.log("clicked");
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow}); 
}

  render() {

    let buttonClass = [classes.ButtonStyle];
    let persons = null;
   
   
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
            users ={this.state.users}
            clicked={this.deleteUserHandler}
            changed={this.changeUserNameHandler}/>
        </div>
       );
        
       buttonClass.push(classes.Red);
        
     }
 
    let assignedClass = [''];
    if(this.state.users.length <= 2){
      assignedClass.push(classes.red);
    }
    if(this.state.users.length <=1){
      assignedClass.push(classes.bold);
    }

    return (

      <div className={classes.App}>
      <p className={assignedClass.join(' ')}>This is really Working</p>
      <button className={buttonClass.join(' ')} onClick={this.togglePersonHandler}>Switch</button>
       {persons}
      </div>
     
    );
   
  } 
}

export default App;
 


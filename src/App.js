 
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import Radium ,{StyleRoot}from 'radium';


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
    const users = [...this.state.users];
    const user = {...users[index]};
    user.name = event.target.value;
    users[index] = user;
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
    const style = {
      backgroundColor :' green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color:'black'

      }
    };
    let persons = null;
    
    if(this.state.showPersons){
      persons = (<div> 
      { this.state.users.map((user,index) => {
        return <Person name={user.name} 
        age={user.age } 
        changed={(event) => this.changeUserNameHandler(event,index)} 
        click={() => this.deleteUserHandler(index)}
        key={this.state.users[index].userId}
        />
        })} </div>);
        
        style.backgroundColor='red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }

    }

    let classes = [];
    if(this.state.users.length <= 2){
      classes.push('red');
    }
    if(this.state.users.length <=1){
      classes.push('bold');
    }

    return (
      
      <StyleRoot>
      <div className="App">
      <p className={classes.join(' ')}>This is really Working</p>
      <button 
        style={style}
        onClick={this.togglePersonHandler}>Swtich</button>
       {persons}
      </div>
      </StyleRoot>
    );
   
  } 
}

export default Radium(App);
 


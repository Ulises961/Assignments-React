 
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {

  state = {

    users : [
        {name: 'Ulises', age : 29},
        {name:'Carlos', age : 28},
        {name:'Stephanie', age : 31}
    ]

  }
  changeUserNameHandler = (newName) => {

     this.setState({
       users: [
          {name: newName.target.value, age:23},
          {name:'Carlos', age :28},
          {name: 'Stephanie', age :31} 
        ]
      });
  }
  changeUserNameHardHandler = (newName) => {

    this.setState({
      users: [
        {name: newName, age:23},
        {name:'Carlos', age :28},
        {name: 'Stephanie', age :31} 
       ]
     });
 }

  render() {
    return (

      <div className="App">
          <Person name={this.state.users[0].name} age={this.state.users[0].age } changed={this.changeUserNameHandler} click={this.changeUserNameHardHandler.bind(this,'Max')}></Person>
          <Person name={this.state.users[1].name} age={this.state.users[1].age } click={this.changeUserNameHardHandler.bind(this,'Louis')}>My Hooby is playing cards</Person>
          <Person name={this.state.users[2].name} age={this.state.users[2].age } click={this.changeUserNameHardHandler.bind(this,'Bob')}>And mine is Coding at night!</Person>
      </div>
    );
   
  } 
}

export default App;
 


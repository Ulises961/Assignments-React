 
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {

  state = {

    users : [
        {name: 'Ulises', age : 29},
        {name:'Carlos', age : 28},
        {name:'Stephanie', age : 31}
    ],
    showPersons : false

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

 togglePersonHandler = () => {
  console.log("clicked");
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow}); 
}

  render() {
    const style = {
      backgroundColor :' white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      

      <div className="App">
      <button 
        style={style}
        onClick={this.togglePersonHandler}>Swtich</button>
       
     { this.state.showPersons  ?
        <div>          
          <Person name={this.state.users[0].name} age={this.state.users[0].age } changed={this.changeUserNameHandler} click={this.changeUserNameHardHandler.bind(this,'Max')}/>
          <Person name={this.state.users[1].name} age={this.state.users[1].age } click={this.changeUserNameHardHandler.bind(this,'Louis')}>My Hooby is playing cards</Person>
          <Person name={this.state.users[2].name} age={this.state.users[2].age } click={this.changeUserNameHardHandler.bind(this,'Bob')}>And mine is Coding at night!</Person>
      </div> : null
      }
      </div>
    );
   
  } 
}

export default App;
 


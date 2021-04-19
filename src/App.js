 
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  state = {

    persons: [
      {name:'Max', age:28},
      {name:'Manu', age:28},
      {name: 'Stephanie', age: 26}
    ]

  }
  switchNameHandler = (newName) => {

    console.log('Was clicked');
     this.setState({persons: [{name: newName, age:26}]});
  }

  render() {
    return (

      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is really working!</p>
        <button className="buttonStyle :hover" onClick={this.switchNameHandler.bind(this,'Ulises')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Carlos')}

          />


      </div>
    );
   
  } 
}

export default App;
 
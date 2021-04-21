 
import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {

  state = {

    users : [
        {user:'Carlos'},
        {user: 'Ulises'} 
    ]

  }
  changeUserNameHandler = (newName) => {

     this.setState({
       users: [
         {user: newName.target.value},
         {user: 'Ulises'} 
        ]
      });
  }

  render() {
    return (

      <div className="App">
          <UserInput changed={this.changeUserNameHandler} userName={this.state.users[0].user}/>
          <UserOutput user={this.state.users[0].user}>My Hooby is playing cards</UserOutput>
          <UserOutput user={this.state.users[1].user}>And mine is Coding at night!</UserOutput>
      </div>
    );
   
  } 
}

export default App;
 


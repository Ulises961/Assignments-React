 
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components';

const StyledButton = styled.button`   
    border: 1px solid cornflowerblue;
    font: inherit;
    background-color: ${props=> props.alt ? 'red':'green'};
    padding: 8px;
    box-shadow: 3px 2px 7px cornflowerblue;
    cursor: pointer;
    &:hover{
          background-color: ${props=> props.alt ? 'salmon':'lightgreen'};
          color:black;

        }`;

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
    // const style = {
    //   backgroundColor :' green',
    //   font: 'inherit',
    //   color: 'white',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover':{
    //     backgroundColor: 'lightgreen',
    //     color:'black'

    //   }
    // };
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
        
        // StyledButton.replace('backgroundColor:green','backgroundColor:lightGreen');
        // StyledButton. &:hover: {
        //   backgroundColor: salmon,
        //   color: black;
        // }

     }

    let classes = [];
    if(this.state.users.length <= 2){
      classes.push('red');
    }
    if(this.state.users.length <=1){
      classes.push('bold');
    }

    return (

      <div className="App">
      <p className={classes.join(' ')}>This is really Working</p>
      <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Switch</StyledButton>
       {persons}
      </div>
     
    );
   
  } 
}

export default App;
 


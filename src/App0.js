 
import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'


class App0 extends Component {

  state = {

    input: '',
    inputLength:0


   }
//   changeUserNameHandler = (event, id) => {
//     const personIndex = this.state.users.findIndex(p =>{
//       return p.id === id;
//     });
//     const person = {...this.state.users[personIndex]};// spreading the user object
//     person.name = event.target.value;

//     console.log(person);
//     const users = [...this.state.users];
//     users[personIndex] = person;
    
//      this.setState({
//        users: users});
//   }

// deletePersonHandler = (personIndex) =>{
//   const users = [...this.state.users]; // spread method for copying the elements, takes users array, copies the values into a list that then is parsed into the new array
//   users.splice(personIndex,1);
//   this.setState({users: users});
// }

lengthMeasureHandler = (event) => {
  console.log("input");
 
  const newInput = event.target.value;
  const newInputLength = newInput.lenght;
  this.setState({'input': newInput, 'inputLength':newInputLength});
  
}

  render() {
    

   // let persons = null;

    // if (this.state.showPersons){
    //   persons = (   
    //     <div>          
    //     {this.state.users.map((user,index) => {
    //       return <Person 
    //         name={user.name} 
    //         age={user.age} 
    //         click ={ ()=> this.deletePersonHandler(index)}
    //         changed ={(event) => this.changeUserNameHandler(event, user.id)}
    //         key={user.id} // uniquely identify this component, react track the component through key
    //         />
    //     })
    //     }

    //     </div> );
    // }
    return (
      
      <div className="App">
        <Validation changed={this.lengthMeasureHandler} length={this.state.inputLength}></Validation>
       <h1>{this.state.newInputLength}</h1>
      </div>
    );
   
  } 
}

export default App0;
 


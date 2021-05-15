 
import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    input: ''
   
   }

inputChangeHandler = (event) =>{

  const newInput= event.target.value;
  
  this.setState({input: newInput});

}


deleteCharHandler = (index) =>{

  let newChars = this.state.input.split('');

  newChars.splice(index,1);
  const text = newChars.join('');
  this.setState({input: text});



}

  render() {
   
    const chars = this.state.input.split('').map((char,index)=>{
      return (
        <CharComponent 
          clicked={()=> this.deleteCharHandler(index)} 
          key={(index)} 
          char={char}/>)  
      });

      
    return (
     
      <div className="App">
        <Validation changed={this.inputChangeHandler} value ={this.state.input} length={this.state.input.length}></Validation>
       {chars}
      </div>
    );
   
  } 
}


export default App;
 


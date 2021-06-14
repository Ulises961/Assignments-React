 
import React, {Component} from 'react';   
import classes from './App.module.css' ;
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
 constructor(props){
  super(props);
  console.log('[App.js] constructor');
 }
  state = {

    users : [
        {name: 'Ulises', age : 29, userId:1},
        {name:'Carlos', age : 28, userId:2},
        {name:'Stephanie', age : 31, userId:3}
    ],
    showPersons : false

  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;

  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');
    let persons = null;
   
   
    if(this.state.showPersons){
      persons = <Persons
            users ={this.state.users}
            clicked={this.deleteUserHandler}
            changed={this.changeUserNameHandler}/>
     
     
     }
 
  
    return (

      <div className={classes.App}>
        <Cockpit 
          title={this.props.title}
          showPersons={this.state.showPersons} 
          users={this.state.users}
          clicked={this.togglePersonHandler}

        />
        {persons}
      </div>
     
    );
   
  } 
}

export default App;
 


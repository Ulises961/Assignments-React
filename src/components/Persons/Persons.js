import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js]');
    //     return state;
    // }
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapShotBeforeUpdate');
        return {message:"Snapshot!"}
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
    render(){
        console.log('[Persons.js] rendering...');
        return this.props.users.map((user,index) => {
        return <Person 
            name={user.name} 
            age={user.age } 
            changed={(event) => this.props.changed(event,user.userId)} 
            click={() => this.props.clicked(index)}
            key={user.userId}
        />
        }) ;
    }

}

export default Persons;

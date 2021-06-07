import React from 'react';
import Person from './Person/Person';

const persons= (props) => props.users.map((user,index) => {
        return <Person 
            name={user.name} 
            age={user.age } 
            changed={(event) => props.changed(event,user.userId)} 
            click={() => props.clicked(index)}
            key={this.state.users[index].userId}
        />
        }) ;


export default persons;
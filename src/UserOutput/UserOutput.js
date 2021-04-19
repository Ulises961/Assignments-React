import React from 'react';

const userOutput = (props) => {
  return (  
    <div>
        <p>Hi I'm {props.user}</p>
        <p>{props.children}</p>
    </div>
  );
}
export default userOutput;
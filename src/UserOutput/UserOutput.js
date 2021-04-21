import React from 'react';
import "./UserOutput.css";

const userOutput = (props) => {
  return (  
    <div className="UserOutput">
        <p>Hi I'm {props.user}</p>
        <p>{props.children}</p>
    </div>
  );
}
export default userOutput;
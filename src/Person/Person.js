import React from 'react';

const person = (props) => {
  return (
    <div>
      <p
        // 用这一行来传递method
        onClick={props.click}
      >I am {props.name}! I am {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
  );
}

export default person;
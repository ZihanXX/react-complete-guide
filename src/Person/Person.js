import React from 'react';

import styles from './Person.css'; // import css modules


const person = (props) => {
  return (
    <div className={styles.Person}>

      <p
        onClick={props.click}
      >I am {props.name}! I am {props.age} years old.</p>

      <p>{props.children}</p>

      <input type="text" onChange={props.changed} value={props.name} />

    </div>
  );
}

export default person;
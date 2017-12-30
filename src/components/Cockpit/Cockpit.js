import React from 'react';
import styles from './Cockpit.css';


const cockpit = (props) => {

  let buttonStyle = '';
  if (!props.showPersons) {
    buttonStyle = styles.GreenHide;
  }

  const subTitleClasses = [];
  if (props.persons.length <= 2) {
    subTitleClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    subTitleClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>

      <h1>Hi, I am a React App.</h1>

      <p
        className={subTitleClasses.join(' ')}
      >This is working!</p>

      <button
        className={buttonStyle}
        onClick={props.clicked}
      >Toggle Persons</button>

    </div>
  );
};


export default cockpit;
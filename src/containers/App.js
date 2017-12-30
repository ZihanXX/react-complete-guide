import React, { Component } from 'react';
import styles from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";


class App extends Component {
  state = { // can only be used in classes who extend Component
    persons: [
      {id: '1', name: 'Chris H', age: 24},
      {id: '2', name: 'Z.X.', age: 25, children: "My hobby is: being silly."},
      {id: '3', name: 'Big Cute', age: 0}
    ],
    otherState : "some other values", // not used
    showPersons : true
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  deleteNameHandler = (index) => {
    // has to be a copy, don't change the original
    const persons = [...this.state.persons];
    // const persons = this.state.persons;  // this could do the same
    persons.splice(index, 1);
    this.setState({
      persons : persons
    });
  }

  // `event` being passed automatically by React
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    // has to be a copy, don't change the original
    const person = {...this.state.persons[personIndex]};
    // const person = Object.assign({}, this.state.persons[personIndex]);  // this could do the same
    person.name = event.target.value;
    const persons = this.state.persons;
    persons[personIndex] = person;
    this.setState({
      persons : persons
    });
  }


  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deleteNameHandler}
          changed={this.nameChangedHandler}
        />;
    }


    return (
      <div className={styles.App}>

        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />

        {persons}

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = { // can only be used in classes who extend Component
    persons: [
      {name: 'Chris H', age: 24},
      {name: 'Z.X.', age: 25}
    ],
    otherState : "some other values",
    showPersons : false
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = "Med Cute";
    this.setState({
      persons: [
        {name: 'Med Cute', age: 24},
        {name: newName, age: 3}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Chris H', age: 24},
        {name: event.target.value, age: 3}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    // CHANGED HERE!!
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Little Cute")}
            changed={this.nameChangedHandler}
          >My Hobbies: Being silly.</Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App.</h1>

        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>

        {persons}
        
      </div>
    );
  }
}

export default App;

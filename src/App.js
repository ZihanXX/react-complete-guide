import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium'; // StyleRoot, WTH?
import Person from './Person/Person';
import './App.css';


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

    const buttonStyle = {
      backgroundColor: '#ee7777',
      color: 'white',
      font: 'inherit',
      border: '1x solid grey',
      padding: '8px',
      cursor: 'pointer',
      marginBottom: '20px',
      ':hover': {
        fontStyle: 'italic'
      }
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              children={person.children}
              click={() => this.deleteNameHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );
    } else {
      buttonStyle.backgroundColor = '#447777';
    }


    const subTitleClasses = [];
    if (this.state.persons.length <= 2) {
      subTitleClasses.push('red');
    }
    if (this.state.persons.length <= 1) {
      subTitleClasses.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">

          <h1>Hi, I am a React App.</h1>
          <p className={subTitleClasses.join(' ')}>This is working!</p>

          <button
            style={buttonStyle}
            onClick={this.togglePersonsHandler}
          >Toggle Persons</button>

          {persons}

        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

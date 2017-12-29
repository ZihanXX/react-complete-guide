import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = { // can only be used in classes who extend Component
    persons: [
      {name: 'Chris H', age: 24},
      {name: 'Z.X.', age: 25}
    ],
    otherState : "some other values"
  }

  // 传递参数 newName
  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DON'T DO THIS: this.state.persons[0].name = "Med Cute";
    this.setState({
      persons: [
        {name: 'Med Cute', age: 24},
        {name: newName, age: 3}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button
          // click 不同位置会结果不一样
          onClick={this.switchNameHandler.bind(this, "Zihan")}
        >Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // click 不同位置会结果不一样
          click={this.switchNameHandler.bind(this, "Little Cute")}
        >My Hobbies: Being silly.</Person>
      </div>
    );
  }
}

export default App;

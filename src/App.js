import React, { Component } from 'react';
import TodosList from './todos-list';
import './App.css';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },

  {
    task: 'eat dinner',
    isCompleted: true
  }
 
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }
  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <TodosList todos = {this.state.todos} />
      </div> 
    );
  }
}

export default App;

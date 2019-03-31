import React, { Component } from 'react';
import './App.css';


class CreateTodo extends Component {
  render() {
    return (
        <form onSubmit = {this.handleCreate.bind(this)}>
            <input type="text" placeholder="Что Я должен сделать?" ref = "createInput" />
            <button>Добавить</button>
        </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();
    
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
    
  }
}

export default CreateTodo;

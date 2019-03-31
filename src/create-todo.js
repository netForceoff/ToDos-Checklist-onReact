import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';


class CreateTodo extends Component {
  constructor(props) {
      super(props);

      this.state = {
          error: null
      };
  }
  renderError() {
    if (!this.state.error) {
        return null;
    }
    return <div style = {{color: 'red'}}>
        {this.state.error}
    </div>
  }
  render() {
    return (
        <form onSubmit = {this.handleCreate.bind(this)}>
            <input type="text" placeholder="Что Я должен сделать?" ref = "createInput" />
            <button>Добавить</button>
            {this.renderError()}
        </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
        this.setState({error: validateInput});
        return;
    }
    this.setState({error: null});
    this.props.createTask(task);
    this.refs.createInput.value = '';
    
  }

  validateInput(task) {
      if (!task) {
          return 'Пожалуйста напишите задачу'
      } else if (_.find(this.props.todos, todo => todo.task === task)) {
          return 'Задача уже создана!'
      } else {
          return null;
      }
  }
}

export default CreateTodo;

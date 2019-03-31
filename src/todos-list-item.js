import React, { Component } from 'react';
import './App.css';


class TodosListItem extends Component {
  render() {
    return (
         <tr>
             <td>{this.props.task}</td>
             <td>
                 <button>Edit</button>
                 <button>Delete</button>
             </td>
         </tr>
    );
  }
}

export default TodosListItem;

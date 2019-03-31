import React, { Component } from 'react';
import './App.css';


class TodosListHeader extends Component {
  render() {
    return (
         <thead>
             <tr>
                 <th>Задачи</th>
                 <th>Действия</th>
             </tr>
         </thead> 
    );
  }
}

export default TodosListHeader;

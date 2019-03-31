import React, { Component } from 'react';
import './App.css';


class TodosListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const {task, isCompleted} = this.props;
        
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        }

        return (
            <td style={taskStyle}
                onClick = {this.props.toggleTask.bind(this, task)}
            >
            {task}
            </td>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Сохранить</button>
                    <button onClick={this.onCancelClick.bind(this)}>Отмена</button>
                </td> 
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Изменить</button>
                <button>Удалить</button>
            </td> 
        );

    }
        
    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({isEditing: true})
    }
    onCancelClick() {
        this.setState({isEditing: false})
    }
}

export default TodosListItem;

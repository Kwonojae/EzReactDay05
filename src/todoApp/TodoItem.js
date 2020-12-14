import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
    
    render() {
        const {todo,onRemove,onToggle} = this.props
        return (
            <>
                <li>
                    <span className={`${todo.done && 'active'}`} onClick={()=> onToggle(todo.no)}>&#10003;</span>
                    <p className={`${todo.done && 'active'}`}>{todo.text}</p>
                    <button onClick={()=> onRemove(todo.no)}>삭제</button>
                </li>
            </>
        );
    }
}

export default TodoItem;
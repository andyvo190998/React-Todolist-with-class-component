import React, { Component } from 'react';
import { Todoitem } from "./Todoitem";
import PropTypes from 'prop-types';


export class Todos extends Component {
    render() {
        return this.props.todos.map((todo)=>(
            <Todoitem key={todo.id} dellBtn={this.props.dellBtn} markComplete={this.props.markComplete} todo={todo}/>
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    dellBtn: PropTypes.func.isRequired,
  }

export default Todos

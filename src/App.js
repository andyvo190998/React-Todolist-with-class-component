import React, { Component } from 'react';
import { Todos } from "./component/Todos";
import { Header } from "./component/layout/Header";
import { Addtodo } from "./component/Addtodo";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "./component/page/About";
import './App.css';



export class App extends Component {
  state = {
    todos: []
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        } return todo;
      })
    })
  }
  dellBtn = (id) => {
    this.setState ({
      todos: [...this.state.todos.filter((todo)=>{return todo.id !== id})]
    })
  }
  addTodo = (title) => { 
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <Router>
        <div>
          <div>
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Addtodo addTodo={this.addTodo}/>
              <Todos dellBtn={this.dellBtn} markComplete={this.markComplete} todos={this.state.todos}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
} 

export default App

import React, { Component } from 'react';
import PropTypes from "prop-types";


export class Todoitem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: "linear-gradient(to right, yellow, #019CAD)",
            padding: '10px',
            border: 'none'
        }
    }
    render() {
        return (
            <div className="heee" style={this.getStyle()}>
                <p style={{fontSize:'1.5rem', display:'inherit', background: 'linearGradient(to right, yellow ,orange)'}}>
                    <input style={{ width: 15, height: 15, display:'inline' }} onChange={this.props.markComplete.bind(this, this.props.todo.id)} type="checkbox"/> {' '}
                    {this.props.todo.title}
                    <button style={btn} onClick={this.props.dellBtn.bind(this,this.props.todo.id)}>x</button>
                </p>
            </div>
        )
    }
}
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    dellBtn: PropTypes.func.isRequired,
  };
  const btn = {
      color: 'white',
      background: 'red',
      border: 'none',
      borderRadius: '50%',
      float: 'right',
      padding: '5px 10px',
      cursor: 'pointer'
  }
  
export default Todoitem

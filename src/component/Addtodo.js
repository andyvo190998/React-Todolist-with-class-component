import React, { Component } from 'react';



export class Addtodo extends Component {
    state = {
        title: ''
    }
onChange = (e) => this.setState({ [e.target.name]: e.target.value })


onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: '' });
}

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text"
                    name="title"
                    value={this.state.title}
                    placeholder="Do something..."
                    style={{flex: '10', padding: '10px'}}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="submit"
                    style={{ flex: 1 }}
                />
            </form>
        )
    }
}

  

export default Addtodo

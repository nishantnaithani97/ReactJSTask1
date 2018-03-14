import React, { Component } from 'react'; 
import Task from './Task.js';
 
export default class App extends Component {
    render() {
        
    }
}

 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
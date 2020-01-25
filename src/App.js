import React from 'react';
import './App.css';
import { Task } from './Task'

function App() {
  return (
    <div className="App">
      <h1>Tasks</h1>
      <div className="container">
        <Task taskName="task 1" status="ToDo"/>
        <Task taskName="task 2" status="In Progress"/>
        <Task taskName="task 3" status="Completed"/>
      </div>
    </div>
  );
}

export default App;

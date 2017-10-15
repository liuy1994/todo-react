import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        newTodo:'',
      todoList:[
        {id:1,title:"first item"},
        {id:2,title:"second item"}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
        <li>
            <TodoItem todo={item}/>
        </li>
      )
    })
    return (
      <div className="App">
        <h1>TODO - LIST</h1>
        <div className="input">
            <TodoInput content={this.state.newTodo} />
            <ol>
                {todos}
            </ol>
        </div>
      </div>
    );
  }
}

export default App;

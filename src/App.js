import React, {Component} from 'react';
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import 'normalize.css'
import './reset.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: '',
            todoList: []
        }
    }

    render() {
        let todos = this.state.todoList.map((item, index) => {
            return (
                <li key={index}>
                    <TodoItem todo={item}/>
                </li>
            )
        })
        return (
            <div className="App">
                <h1>TODO - LIST</h1>
                <div className="inputWrapper">
                    <TodoInput
                        content={this.state.newTodo}
                        onChange={this.changeTitle.bind(this)}
                        onSubmit={this.addTodo.bind(this)}
                    />
                </div>
                <ol>
                    {todos}
                </ol>
            </div>
        )
    }
    addTodo(e){
        this.state.todoList.push({
            id:idMaker(),
            title:e.target.value,
            status:null,
            deleted:false})
        this.setState({
            newTodo:'',
            todoList:this.state.todoList
        })
    }
    changeTitle(e) {
        this.setState({
            newTodo: e.target.value,
            todoList:this.state.todoList
        })

    }
}
let id =2
function idMaker(){
    id +=1
    return id
}
export default App;

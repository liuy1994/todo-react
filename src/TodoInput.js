import React, {Component} from 'react'
import './TodoInput.css'

export default class TodoInput extends Component {
    render() {
        return (
            <input
                type="text"
                value={this.props.content}
                onChange={this.changeTitle.bind(this)}
                onKeyPress = {this.submit.bind(this)}
                className="TodoInput"
            />
        )
    }
    submit(e){
        if(e.key === 'Enter'){
            if(this.props.content !== ''){
                this.props.onSubmit(e)
            }

        }
    }
    changeTitle(e){
        this.props.onChange(e)
    }
}
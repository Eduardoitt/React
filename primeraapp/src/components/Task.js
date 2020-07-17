import React, {Component} from 'react';

class Task extends Component{
    render(){
       const {task}= this.props;
        return <div>
            {task.title} - 
            {task.Description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox"/>
            <input type="button" value="x"/>
        </div>
    }
}
export default Task;
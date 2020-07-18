import React, {Component} from 'react';

class Task extends Component{
    styleCompleted(){
        return{
            fontSize:'20px',
            color:this.props.task.done?'grey':'black',
            textDecoration: this.props.task.done?'line-through':'none'
        }
    }
    render(){
       const {task}= this.props;
        return <p style={this.styleCompleted()}>
            {task.title} - 
            {task.Description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox"/>
            <input type="button" style={btnDelete} value="x"/>
        </p>
    }
}

const btnDelete={
    fontSize:'18px',
    background:'#ea2027',
    color:'#fff',
    border:'none',
    padding:'10px 15px',
    borderRadius:'50%',
    cursor:'pointer',
    
}
export default Task;
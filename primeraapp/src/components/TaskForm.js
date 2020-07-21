import React,{Component} from 'react';

export default class TaskForm extends Component{
    state={
        title:'',
        description:''
    }
    onSubmit=e=>{
        e.preventDefault();
    }
    onChange =e =>{
      this.setState({
          [e.target.name] : e.target.value
      })
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}> 
                <input name="title" type="text" onChange={this.onChange} value={this.state.title} id="txtrtask" placeholder="Write a task" />
                <br/>
                <br/>
                <textarea name="description" value={this.state.description} onChange={this.onChange} placeholder="write a description"></textarea>
                <br/>
                <input type="submit" value="send" />
            </form>
        )
    }
}
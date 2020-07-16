import React from 'react';

import './App.css';

//function Hellowworld(props){
  //return(
 // <div id="hello">
    //<h3>{props.subtitle}</h3>
    //{props.mytext}
   // </div>
 // )
//}
class Hellowworld extends React.Component{
  state={
    show:true
  }
  toggleShow=()=>{
    this.setState({show:!this.state.show})
  }
  render(){
    if(this.state.show){
      return(
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <input onClick={this.toggleShow}type="button" value="Change state"></input>
        </div>
      )
    }else{
      return <h1>no hay nada para mostrar
              <input onClick={this.toggleShow}type="button" value="Change state"></input>
      </h1>

    }
  }
}
// funcion flecha
//const App = () => <div>This is my function: <Hellowworld/> </div>

function App() {
  return (
    <div>This is my component: 
      <Hellowworld mytext="Hello Eduardo" subtitle="engineer"/>
      <Hellowworld mytext="23 years"/>
      <Hellowworld mytext="from Tijuana"/></div>
  );
}
// clase
//class App extends React.Component{
//return <div>This is my compinent: <Hellowworld/></div>
//}
export default App;

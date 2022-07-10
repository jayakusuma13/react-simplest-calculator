import { React,Component } from 'react';
import './App.css';
import Display from './components/display';
import Button from './components/keypad';

class App extends Component {
  constructor(){
    super()
    this.state = {result:""}
  }

  onClick = e => {
    const value = e.target.value
    if(value === '='){
      this.setState({result: eval(this.state.result)})
    }else if(value === 'C'){
      this.setState({result: ""})
    }else if(value === 'CE'){
      this.setState({result: this.state.result.slice(0,-1)})
    }else{
      this.setState({result: this.state.result + value})
    }
  }

  render(){
    return(
      <div className='App'>
        <div>
        <Display result={this.state.result}></Display>
        <Button name={'1'} onClick={this.onClick}></Button>
        <Button name={'2'} onClick={this.onClick}></Button>
        <Button name={'3'} onClick={this.onClick}></Button>
        <Button name={'4'} onClick={this.onClick}></Button>
        <Button name={'5'} onClick={this.onClick}></Button>
        <Button name={'6'} onClick={this.onClick}></Button>
        <Button name={'7'} onClick={this.onClick}></Button>
        <Button name={'8'} onClick={this.onClick}></Button>
        <Button name={'9'} onClick={this.onClick}></Button>
        <Button name={'*'} onClick={this.onClick}></Button>
        <Button name={'/'} onClick={this.onClick}></Button>
        <Button name={'+'} onClick={this.onClick}></Button>
        <Button name={'-'} onClick={this.onClick}></Button>
        <Button name={'='} onClick={this.onClick}></Button>
        <Button name={'C'} onClick={this.onClick}></Button>
        <Button name={'CE'} onClick={this.onClick}></Button>
        </div>
      </div>
    )
  }
}

export default App;

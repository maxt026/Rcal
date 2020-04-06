import React, {Component} from 'react';
import './App.css';
import KeyPad from './components/KeyPad';
import Output from './components/Output';


class App extends Component {
  state = {result: ''}

  reset = () => {
    this.setState({
    result: ''
    })
  };

  backspace = () => {
      this.setState({
      result: this.state.result.slice(0, -1)
      })
  };

  sqrt = () => {
      this.setState({
      result: Math.sqrt(this.state.result)
      });
  };

  cube = () => {
      this.setState({
      result: this.state.result * this.state.result
      });
  };

  factorial = (result) => {
      let f = this.state.result
      if (f == 0) {
      this.setState({result: 1})
      } else if (f > 0) {
      if (f == 1 || f == 2) {
          this.setState({result: 1}) 
      } else {
          let result1 = 1;
          for (let i=2; i<=f; i++) {
          result1 = result1 * i;                
          }
          this.setState({result: result1})
      }
      } else if (f < 0) {
      window.alert('Wrong operation!');
      this.setState({result: ''})
      }
  };

  reverse = (result) => {
      if (this.state.result == 0) {
      window.alert('Wrong operation!');
      } else {
      this.setState({result: 1/(this.state.result)});
      }
  };

  exp = () => {
      this.setState({result: Math.exp(this.state.result)});
  };


  ln = () => {
      if (this.state.result > 0) {
      this.setState({result: Math.log(this.state.result)});
      } else {
      window.alert('Wrong operation!')
      }
  };

  efunc = () => {
      this.setState({
      result: Math.E
      });
  };

  cubesqrt = () => {
      this.setState({
      result: Math.cbrt(this.state.result)
      });
  };

  abs = () => {
      this.setState({
      result: Math.abs(this.state.result)
      });
  };

  pi = () => {
    this.setState({result: Math.PI})
  };


  buttonPressed = buttonName => {
    if (buttonName === '=') {
      this.calculate();
    } else if (buttonName === 'C') {
      this.reset();
    } else if (buttonName === 'CE') {
      this.backspace();
    } else if (buttonName === 'sqrt') {
      this.sqrt();
    } else if (buttonName === '3√') {
      this.cubesqrt();
    } else if (buttonName === 'n2') {
      this.cube();
    } else if (buttonName === 'n!') {
      this.factorial();
    } else if (buttonName === 'e') {
      this.efunc();
    } else if (buttonName === 'pi') {
      this.pi();
    } else if (buttonName === '1/x') {
      this.reverse();
    } else if (buttonName === 'exp') {
      this.exp();
    } else if (buttonName === 'ln') {
      this.ln();
    } else if (buttonName === '|x|') {
      this.abs();
    } else {
      this.setState({result: this.state.result + buttonName})
    };
  };


  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || '') + ''
      });
    } catch(e) {
      this.setState({
        result: 'error'
      })
    } 
  };

  
  render() {
    return (
      <div className="App">
      <div className='calc-body'>
        <Output result={this.state.result} />
        <KeyPad buttonPressed={this.buttonPressed} />
      </div>
      </div>
    );
  };
};

export default App;

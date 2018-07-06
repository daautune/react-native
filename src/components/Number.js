import React, {Component} from 'react';

class Number extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: 1,
        string: true
      }
    }
    // changeNumber = () => {
    //   const value = this.state.value
    //   const currentNumber = this.props.currentNumber
    //   this.setState ( {
    //     value: currentNumber + 1
    //   })
    // }
    click = (type) => {
      const value = this.state.value
      const currentNumber = this.props.currentNumber
      this.setState ((preState, props ) => ({
        value: type==='UP' ? preState.value + props.currentNumber  : preState.value - props.currentNumber
      }))
    }
    toggleString = () => {
       this.setState((preState) => ({
           string: !preState.string
       }))
    }
    render() {
        return (
          <div>
            <div>
              <button onClick={() => this.click('UP')}>+</button>
              <h1>{this.state.value}</h1>
              <button onClick={() => this.click('DOWN')}>-</button>
            </div>
            <div>
              <button onClick={() => this.toggleString()}>{this.state.string.toString()}</button>
            </div>
          </div>
        )
    }
 }

export default Number

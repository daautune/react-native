import React, {Component} from 'react'

class Time extends Component {
    constructor(props) {
        super(props)
        this.state = {
          time: 5
        }
    }
    componentWillMount = () => {
      console.log('will mount');
    }
    componentDidMount = () => {
      this.setState({time: 5})

    }
    shouldComponentUpdate (nextProps, nextState) {
      let timeout = setTimeout(() => {
        this.setState(preState => ({

          time:preState.time - 1
        }))
      }, 1000)
      if(nextState.time ===(-1)) {
        clearTimeout(timeout)
        return false
      }
     return  true
    }
    render() {
    return (
      <div className = "App" >
       <h1>{this.state.time}</h1>
      </div>
    )
  }
}

export default Time

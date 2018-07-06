import React, {Component} from 'react'

class Array extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        console.log('props Author', this.props)
        const arr = [{
          day: 'Sunday',
          month: 'May'
        },{
          day: 'Monday',
          month: "June"
        }]

        return (
          <div className = "App" >
           <form>
             {
               arr.map(element => (
                  <p>{  element.day + ' ' + element.month}</p>
               ))
             }
           </form>
          </div>
        );
    }
}

export default Array

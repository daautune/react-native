import React, {Component} from 'react';

class Select extends Component {
    constructor(props) {
     super(props)
     this.state = {
       value: 'saab'
     }
   }
   handleChange = (event) => {
     const value = this.state.value
     this.setState({
       value: event.target.value
     })
  }
   render() {
     return (
       <div>
         <select onChange={this.handleChange} value={this.state.value}>
           <option value="saab">saab</option>
           <option value="Tien Nu">Hoai</option>
           <option value="Thien Than">Phongtoda</option>
         </select>
         <h2>{this.state.value}</h2>
       </div>
     )
   }
}

export default Select;

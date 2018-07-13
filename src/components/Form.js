import React , {Component} from 'react'
import Button from './Button'

class Form extends Component {

   createProduct = (e) => {
     e.preventDefault()
     let product = this.refs.productName.value
     let product = this.refs.productPrice.value
     if(typeof product === 'string' && product.length > 0) {
       this.props.addProduct(product)
       this.refs.productForm.reset()
     }
    }
    render() {
      const Product = (props) => {
      return (
        <form ref="productForm" onSubmit={this.createProduct}>
          <div className="form-group">
            <input
              type = "text"
              placeholder = "name"
              ref="productName"
            />
            <br />
            <input
              type = "text"
              placeholder = "price"
              ref="productPrice"
             />
            <br />
          </div>
          <button type='Submit'>Add</button>
          <Button nameBtn={'Back'} onClick={props.goBack}></Button>
        </form>
      )
    }
  }
}

export default Form;

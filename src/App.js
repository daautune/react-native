import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Number from './components/Number';
import Select from './components/Select';
import TextInput from './components/TextInput';
import Time from './components/Time';
import Array from './components/Array';
import ConvertMoney from './components/ConvertMoney';
import Calculation from './components/Calculation';
import Product from './components/Product';
import Button from './components/Button';
import Form from './components/Form';
import products from './data/product';
import SearchBox from './components/SearchBox';
import RatingProduct from './components/RatingProduct'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          products: products,
          isForm: false,
          filter: null,
          keyword: ''
        }
    }
    filterProduct = (name)  => {
      const number = parseInt(name.split(' ')[1])
      let resultFilter = []
      const preProducts = products
      if(!number) {
        resultFilter = preProducts
      } else {
        if(name.includes('=')) {
          resultFilter = products.filter(p => p.price <= number)
        } else {
          resultFilter = products.filter(p => p.price > number)
        }
      }
      this.setState({
        products: resultFilter
      } );
    }
    updateSearch  = (keyword) => {
      this.setState({
        keyword: keyword
      });
    }

    gotoForm =() => {
      this.setState({
        isForm: true
      })
    }
    goBack =() => {
      this.setState({
        isForm:false
      })
    }
    renderButton =() => {
      const buttons=[{
        name: 'All',
        onClick:(name) => this.filterProduct(name)
      }, {
        name: '<= 100000',
        onClick:(name) => this.filterProduct(name)
      }, {
        name: '> 100000',
        onClick:(name) => this.filterProduct(name)
      }, {
        name: '+',
        onClick:() => this.gotoForm()
      }]

    return (
      buttons.map((btn, i) => (
       <Button
         key = {i}
         nameBtn={btn.name}
         onClick={btn.onClick}
       />
     ))
   )
 }

    render() {
      let {products,keyword} = this.state;

      if(keyword !== ''){
        products = products.filter(p => p.name.indexOf(keyword) !== -1);
      }
        return (
          <div className = "App" >
             <Header header = {this.props.name} />
             {
               this.state.isForm ?
               <Form goBack={this.goBack}/> :
               <div>
                 {this.renderButton()}
                 <Product products={products}/>
               </div>
             }
             <SearchBox updateSearch = {this.updateSearch} />
          </div>
        );
    }
}

export default App;

import React, {Component} from 'react'
import Data from './../data/Data';

class ConvertMoney extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currencies: Data.currencies,
          currencyVN: Data.currencies[0],
          currencyUS: Data.currencies[1],
          currencyVNval: Data.currencies[0].sellRate,
          currencyUSval: Data.currencies[1].sellRate

        }
    }
    onConvertMoney(code) {
      const {currencies, currencyVNval} = this.state;
      const currency = currencies.fifter(currency => currency.code === code);
      this.setState({
        currencyUS: currency[0],
        currencyUSval: currencyVNval * currency[0].sellRate
      })
    }

    onChangeHandler(e, currency){

    const {currencyVN, currencyUS} = this.state;

    if(currency === 'VN'){

      const newValueVN = e.target.value;
      this.setState({
        currencyVNval: newValueVN,
        currencyUSval: newValueVN / currencyVN.sellRate
      })

    } else if(currency === 'US'){

      const newValueUS = e.target.value;
      this.setState({
        currencyVNval: newValueUS * currencyVN.sellRate,
        currencyUSval: newValueUS
      })

    }

  }
  render(){
   const {currencies, currencyVN, currencyUS, currencyVNval, currencyUSval} = this.state;
   return (
     <div>
       <div className="row">
         <div className="col-sm-12">
           <h2>CONVERT MONEY</h2>
           <p>
             Exchange Rate {` ${currencyUS.code} ${currencyUS.sellRate} ${currencyUS.sign} `} = {`${currencyVN.code} ${currencyVN.sellRate} ${currencyVN.sign} `}
           </p>
         </div>
       </div>
       <div className="row">
         <div className="input-group">
           <span className="input-group-addon">{currencyUS.code}</span>
           <input type="number" value={currencyUSval} onChange={(e) => {
             this.onChangeHandler(e, 'US');
           }}/>
           <span className="input-group-addon">{currencyVN.code}</span>
           <input type="number" value={currencyVNval} onChange={(e) => {
             this.onChangeHandler(e, 'VN');
           }} />
         </div>
       </div>
    </div>
   )
 }
}

export default ConvertMoney

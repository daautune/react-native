import React , {Component} from 'react'

class Calculation extends Component {
  // state = {
  //   vnd: 0,
  //   usd: 0
  // }
  onChangeCurrency = (currency, event) => {
    const value = event.target.value
    if(value) {
      this.convertMoney(currency, parseInt(value))
    } else {
      this.setState({
        vnd:'',
        usd:''
      })
    }
  }

  convertMoney = (currency, number) => {
    let vnd = this.vnd.value
    let usd = this.usd.value
    if(vnd) {
      this.usd.value = vnd / 22
    }
    else {
      this.vnd.value = usd * 22
    }
    // const currencyRevert = (currency ==='vnd') ? 'usd' : 'vnd'
    // const result = (currency ==='vnd') ? number /22 : number*22
    // this.setState ({
    //   [currency]: number,
    //   [currencyRevert]: result
    // })
  }
  render() {
    return (
      <div>
        <div>
          <input
            type='text'
            defaultValue=''
            //value={this.state.vnd}
            placeholder='VND'
            ref = {(event) => this.vnd = event}
            //onChange={(event) => this.onChangeCurrency('vnd',event)}
          />
          <span>VND</span>
        </div>
        <button type='button' onClick={this.convertMoney}>CONVERT</button>
        <div>
          <input
            type='text'
            defaultValue=''
            //value={this.state.usd}
            placeholder='USD'
            ref = {(event) => this.usd = event}
            //onChange={(event) => this.onChangeCurrency('usd',event)}
          />
          <span>USD</span>
        </div>
      </div>
    )
  }
}

export default Calculation

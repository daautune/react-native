import React, {Component} from 'react'
import logo from '../logo.svg'

const renderArtical = (name) => {
  return (
    <h1 className="App-title">Welcome to Class {name}</h1>
  )
}

const Header = (props) => {
  return (
    <header className="App-header">
      <img className="App-logo" src={logo} alt="logo"/>
      <h1 className="App-title">Welcome to Reacts</h1>
      {renderArtical(props.header)}
    </header>
  )
}

export default Header

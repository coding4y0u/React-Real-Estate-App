import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<header>
    <div className="logo">Logo</div>

    <nav>
      <a href="#">create adds</a>
      <a href="#"> about us</a>
      <a href="#"> log in</a>
      <a className="register-btn" href="#"> Register</a>
    </nav>
      </header>)
  }
}

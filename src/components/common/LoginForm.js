import React, { Component } from 'react'
import { emailChanged, passwordChanged, loginUser } from '../../actions'
import { connect } from "react-redux"

import { Card, CardItem, ForumInput, Button } from '../common'

class LoginForm extends Component {

  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text)
  }

  onButtonPress = () => {
    const { email, password } = this.props
    this.props.loginUser({ email, password})
  }

  render(){
    return(
      <Card>
        <CardItem>
          <ForumInput label="Email:" placeholder="email@gmail.com" onChangeText={this.onEmailChange} value={this.props.email}/>
        </CardItem>

        <CardItem>
          <ForumInput label="Password:" placeholder="password" secureTextEntry onChangeText={this.onPasswordChange} value={this.props.password}/>
        </CardItem>

        <CardItem>
          <Button text="Login" fireButton={this.onButtonPress}/>
        </CardItem>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })( LoginForm )

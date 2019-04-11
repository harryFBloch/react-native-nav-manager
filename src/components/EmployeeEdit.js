import _ from 'lodash'
import React, { Component } from 'react'
import Communications from 'react-native-communications'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import {Card, CardItem, Button, Confirm} from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {

  constructor(){
    super()
    this.state = {showModal: false}
  }

  componentWillMount(){
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value})
    })
  }

  onButtonPress = () => {
    const { name, phone, shift} = this.props

    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
  }

  onTextPress = () => {
    const { phone, shift } = this.props

    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  onAccept = () => {
    this.props.employeeDelete(this.props.employee)
  }

  onDecline = () => {
    this.setState({showModal: false})
  }

  render(){
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardItem>
          <Button text="Save Changes" fireButton={this.onButtonPress}/>
        </CardItem>

        <CardItem>
          <Button text="Text Schedule" fireButton={this.onTextPress}/>
        </CardItem>

        <CardItem>
          <Button text="Fire Employee" fireButton={() => this.setState({ showModal: !this.state.showModal})}/>
        </CardItem>

        <Confirm
        message="Are you sure you want to delete this?"
        visible={this.state.showModal}
        onAccept={this.onAccept}
        onDecline={this.onDecline}/>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm

  return {name, phone, shift}
}


export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)

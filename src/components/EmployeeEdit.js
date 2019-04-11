import _ from 'lodash'
import React, { Component } from 'react'
import Communications from 'react-native-communications'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave } from '../actions'
import {Card, CardItem, Button} from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {

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
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm

  return {name, phone, shift}
}


export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit)
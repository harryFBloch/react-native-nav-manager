import React, { Component } from 'react'
import {Picker, Text} from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import {Card, CardItem, FormInput, Button} from './common'

class EmployeeCreate extends Component {
  render(){
    return (
      <Card>
        <CardItem>
          <FormInput
          label="Name"
          placeholder="Jane"
          value={this.props.name}
          onChangeText={value => this.props.employeeUpdate({prop: "name", value})}
          />
        </CardItem>

        <CardItem>
          <FormInput
          label="Phone"
          placeholder="555-555-5555"
          value={this.props.phone}
          onChangeText={value => this.props.employeeUpdate({prop: "phone", value})}
          />
        </CardItem>

        <CardItem style={{flexDirection: "column"}}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({prop: shift, value})}
          >
            <Picker.item label="Monday" value="Monday"/>
            <Picker.item label="Tuesday" value="Tuesday"/>
            <Picker.item label="Wednesday" value="Wednesday"/>
            <Picker.item label="Thursday" value="Thursday"/>
            <Picker.item label="Friday" value="Friday"/>
            <Picker.item label="Saterday" value="Saterday"/>
            <Picker.item label="Sunday" value="Sunday"/>
          </Picker>
        </CardItem>

        <CardItem>
          <Button text="Create" />
        </CardItem>
      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm

  return {name, phone, shift}
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)

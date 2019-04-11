import React, { Component } from 'react'
import {View, Text, Picker} from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate, employeeFormReset } from "../actions"
import {CardItem, FormInput} from './common'
import { EMPLOYEE_SAVE_SUCCESS } from "../actions/types"

class EmployeeForm extends Component {

  componentWillUnmount(){
    this.props.employeeFormReset()
  }

  render(){
    return (
      <View>
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
          onValueChange={value => this.props.employeeUpdate({prop: "shift", value})}
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
      </View>
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
  const { name, phone, shift} = state.employeeForm
  return { name, phone, shift}
}



export default connect(mapStateToProps, {employeeUpdate, employeeFormReset})(EmployeeForm)

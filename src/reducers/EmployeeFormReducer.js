import { EMPLOYEE_UPDATE, EMOLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS } from '../actions/types'

const INITIAL_STATE = {name: "", phone: "", shift: ""}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMPLOYEE_SAVE_SUCCESS:
      console.log("reset_-------")
      return INITIAL_STATE
    case EMOLOYEE_CREATE:
      return INITIAL_STATE
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value}
    default:
      return state
  }
}

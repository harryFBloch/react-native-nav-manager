import { EMPLOYEE_UPDATE, EMOLOYEE_CREATE } from '../actions/types'

const INITIAL_STATE = {name: "", phone: "", shift: ""}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMOLOYEE_CREATE:
      return INITIAL_STATE
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value}
    default:
      return state
  }
}

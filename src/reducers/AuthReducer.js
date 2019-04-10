import { EMAIL_CHANGED, PASSWORD_CHANGED, USER_CHANGED, LOADING_CHANGED, ERROR_CHANGED } from '../actions/types'

const INITIAL_STATE = {
  email: "",
 password: "",
 loading: false,
 error: "",
 user: {}
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type){
    case EMAIL_CHANGED:
      return {...state, email: action.payload}

    case PASSWORD_CHANGED:
      return {...state, password: action.payload}

    default:
      return state
  }
}

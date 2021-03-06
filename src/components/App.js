
import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from '../reducers'
import { FirebaseInfo } from '../FirebaseInfo.js'
import LoginForm  from './common/LoginForm'
import { Header } from './common'
import Router from '../Router'

export default class App extends Component {

componentWillMount(){
  console.log(FirebaseInfo)
  firebase.initializeApp(FirebaseInfo)
}

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

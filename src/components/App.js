
import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from '../reducers'
import { FirebaseInfo } from '../FirebaseInfo.js'

export default class App extends Component {

componentWillMount(){
  console.log(FirebaseInfo)
  firebase.initializeApp(FirebaseInfo)
}

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View >
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

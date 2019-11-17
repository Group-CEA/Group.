import React from "react";

import { AppRegistry } from "react-native";

import * as firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./config/Firebase";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import SwitchNavigator from "./navigation/SwitchNavigator";
import reducer from "./reducers";

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);


AppRegistry.registerComponent("group", () => App);

export default class App extends React.Component {
  render() {
    // return (<AppContainer />)
    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    );
  }
}




// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//const db = firebase.firestore()
//db.collection('user').add({ name: "test" })
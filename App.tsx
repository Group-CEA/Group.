import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import StartPage from "./components/Start";
import Place from "./components/Place";
import { AppRegistry } from "react-native";

import * as firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from "./config/Firebase"

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import SwitchNavigator from './navigation/SwitchNavigator'
import reducer from './reducers'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//const db = firebase.firestore()
//db.collection('user').add({ name: "test" })


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: StartPage,
      navigationOptions: {
        tabBarLabel: "Startseite",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#900" />
        )
      }
    },
    Settings: {
      screen: Place,
      navigationOptions: {
        tabBarLabel: "Test",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cog" size={30} color="#900" />
        )
      }
    }
  },
  {
    order: ["Home", "Settings"],
    tabBarOptions: {
      activeTintColor: "#D4AF37",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "white"
      }
    }
    
  },
  
  
);
const AppContainer = createAppContainer(TabNavigator);
AppRegistry.registerComponent('App', () => App);

export default class App extends React.Component {
  render() {
    //return (<AppContainer />)
    return (
            <Provider store={store}>
                <SwitchNavigator />
            </Provider>
        )
  }
}
import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import StartPage from "./components/Start";
import Place from "./components/Place";

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
  }
);
const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

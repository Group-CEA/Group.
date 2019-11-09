import React from "react";
import { StyleSheet, View } from "react-native";

import StartPage from "./components/Start";
import Place from "./components/Place";

export default class App extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
    console.log("Searchbar");
  };

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        {/* <StartPage search={search} updateSearch={this.updateSearch} /> */}
        <Place></Place>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

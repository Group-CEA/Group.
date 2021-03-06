import React from "react";
import { StyleSheet, View, AppRegistry } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Avatar } from "react-native-elements";
import { SearchBar } from "react-native-elements";
import { Icon } from "react-native-elements";

export default class StartScreen extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
    console.log("Searchbar");
  };

  placeSearch = search => {
    this.props.navigation.navigate("Settings", this.updateSearch.bind(this));
    console.log(this.state.search)
  }

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        ></MapView>
        <View style={styles.searchbar}>
          <SearchBar
            lightTheme
            round
            placeholder="Was möchten Sie tun?"
            returnKeyType = "search"
            onChangeText={this.updateSearch}
            onSubmitEditing={this.placeSearch}
            value={search}
          />
        </View>
        <View style={styles.profile}>
          <Avatar
            size={80}
            rounded
            onPress={() => this.props.navigation.navigate('Profile')}
            activeOpacity={0.7}
            source={require("../assets/avatar.png")} // Quelle: https://de.cleanpng.com/png-2sre9w/
            imageProps={{ resizeMode: "cover" }}
          />
        </View>
        <View style={styles.settings}>
          <Icon
            raised
            name="sliders"
            type="font-awesome"
            onPress={() => console.log("Settings")}
          />
        </View>
        <View style={styles.gps}>
          <Icon
            raised
            name="location-arrow"
            type="font-awesome"
            onPress={() => console.log("GPS")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  profile: {
    left: -130,
    top: 10
  },
  settings: {
    left: 150,
    top: -80
  },
  gps: {
    left: 150,
    top: -70
  },
  searchbar: {
    left: 0,
    top: -330,
    width: 300
  }
});

AppRegistry.registerComponent("group", () => StartScreen);

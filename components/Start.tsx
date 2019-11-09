import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Avatar } from "react-native-elements";
import { SearchBar } from "react-native-elements";
import { Icon } from "react-native-elements";

const start = props => {
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
          onChangeText={props.updateSearch}
          value={props.search}
        />
      </View>
      <View style={styles.profile}>
        <Avatar
          size={80}
          rounded
          onPress={() => console.log("Profile")}
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
};

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
    top: -400,
    width: 300
  }
});

export default start;

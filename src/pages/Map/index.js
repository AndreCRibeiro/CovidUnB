import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class Map extends Component {
  state = {
    region: null,
    destination: null,
  };

  async componentDidMount() {
    await Geolocation.getCurrentPosition((info) => {
      const lat = info.coords.latitude;
      const lng = info.coords.longitude;

      this.setState({
        latitude: lat,
        longitude: lng,
      });
    });
  }

  render() {
    const { latitude, longitude } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          }}
          showsUserLocation
          loadingEnabled
        />
      </View>
    );
  }
}

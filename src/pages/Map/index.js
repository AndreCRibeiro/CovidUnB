import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { ActivityIndicator } from 'react-native-paper';

export default class Map extends Component {
  state = {
    region: null,
    mapAvaible: true,
  };

  componentDidMount() {
    const location = Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          mapAvaible: false,
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
        console.tron.log('deu certo', location);
      }, //sucesso
      (err) => {
        console.tron.log(err);
        this.setState({
          region: {
            mapAvaible: false,

            latitude: -15.813976,
            longitude: -47.965921,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      }, //erro
      {
        timeout: 6000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    );
  }
  setLocation(coord) {
    console.tron.log('deu certo', latitude, longitude);
  }
  render() {
    const { region, mapAvaible } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {mapAvaible ? (
          <MapView
            style={{ flex: 1 }}
            region={region}
            showsUserLocation
            loadingEnabled
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}

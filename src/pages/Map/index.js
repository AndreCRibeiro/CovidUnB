import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { ActivityIndicator } from 'react-native-paper';

export default class Map extends Component {
  state = {
    region: '',
  };

  async componentDidMount() {
    await Geolocation.getCurrentPosition(
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
      }, // sucesso
      () => {
        this.setState({
          mapAvaible: false,
          region: {
            latitude: -15.763847,
            longitude: -47.8721,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      }, // erro
      {
        timeout: 5000,
        enableHighAccuracy: false,
        maximumAge: 1000,
      }
    );
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
    return true;
  };

  setLocation(coord) { }

  handleBackButton = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
    return true;
  };

  setLocation(coord) {}

  render() {
    const { region, mapAvaible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {region ? (
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

import React, { Component } from 'react';
import {
  Platform,
  Text,
  Vibration,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { accelerometer } from 'react-native-sensors';
import Geolocation from '@react-native-community/geolocation';
import KeepAwake from 'react-native-keep-awake';
import useAuth from '../../store/index';

import api from '../../services/api';

const ONE_SECOND_IN_MS = 1000;

let cont = 0;

const withZustand = (Comp) => (props) => {
  const { token, userData } = useAuth();
  return <Comp {...props} token={token} userData={userData} />;
};

class Panic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keepScreenAwake: false,
      location: '',
    };
  }

  callHelp = accelerometer.subscribe(async ({ x, y, z, timestamp }) => {
    if (x > 45 || y > 45) {
      cont++;
      if (cont > 80) {
        cont = 0;
        Vibration.vibrate(1 * ONE_SECOND_IN_MS);

        const { token, userData } = this.props;

        await Geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            const location = JSON.stringify({
              latitude,
              longitude,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134,
            });

            const body = {
              name: userData.name,
              whatsapp: userData.whatsapp,
              user_location: location,
            };

            try {
              api.post('/sos', body, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              Alert.alert('SOS UnB ativado!');
            } catch (err) {
              console.log('CATCHEEEED', err);
            }
          }, // sucesso
          (err) => {
            console.tron.log(err);
          }, // erro
          {
            timeout: 5000,
            enableHighAccuracy: false,
            maximumAge: 1000,
          }
        );
      }
    }
  });

  render() {
    return <SafeAreaView />;
  }
}

export default withZustand(Panic);

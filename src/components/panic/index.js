/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import {
  Platform,
  Text,
  Vibration,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import { accelerometer } from 'react-native-sensors';
import Geolocation from '@react-native-community/geolocation';
import KeepAwake from 'react-native-keep-awake';
import BackgroundTask from 'react-native-background-task';

const Panic = () => {
  const [keepScreenAwake, changeKeepScreenAwake] = useState(false);
  const [safe, changeSafeState] = useState(true);
  const [location, changeLocation] = useState();

  const ONE_SECOND_IN_MS = 1000;

  let cont = 0;

  BackgroundTask.define(() => {
    accelerometer.subscribe(({ x, y, z, timestamp }) => {
      if (x > 19 || y > 19) {
        cont++;
        if (cont > 70) {
          cont = 0;
          changeSafeState(false);
          Vibration.vibrate(1 * ONE_SECOND_IN_MS);

          getLocation();
        }
      }
    });
    // BackgroundTask.finish();
  });

  // const callHelp = accelerometer.subscribe(({ x, y, z, timestamp }) => {
  //   if (x > 19 || y > 19) {
  //     cont++;
  //     if (cont > 70) {
  //       cont = 0;
  //       changeSafeState(false);
  //       Vibration.vibrate(1 * ONE_SECOND_IN_MS);

  //       getLocation();
  //     }
  //   }
  // });

  const getLocation = async () => {
    await Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        changeLocation({
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        });
        console.log(location);
      }, // sucesso
      () => {}, // erro
      {
        timeout: 5000,
        enableHighAccuracy: false,
        maximumAge: 1000,
      }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/*  <Button onPress={() => changeSafeState(true)} title="Estou Seguro" /> */}
      </View>
      {keepScreenAwake ? (
        <View>
          <Text style={[styles.header, styles.paragraph]}>
            SOS UnB - Botão de Pânico
          </Text>
          <Text style={[styles.header, styles.paragraph]}>
            Agite o aparelho até ele vibrar.
          </Text>
          <Button
            title="Manter App Ativo"
            onPress={() => changeKeepScreenAwake(false)}
          />
          <KeepAwake />
        </View>
      ) : (
        <View>
          <Button
            title="Permitir desativação do App"
            onPress={() => changeKeepScreenAwake(true)}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    textAlign: 'center',
  },
});

export default Panic;

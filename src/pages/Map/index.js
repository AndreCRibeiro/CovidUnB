import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  PermissionsAndroid,
  Platform
} from 'react-native';

import {
  WebView
} from 'react-native-webview'
import Geolocation from '@react-native-community/geolocation';

import html_script from './html_script'

class Map extends React.Component {

  state = {
    currentLongitude: 'unknown',//Initial Longitude
    currentLatitude: 'unknown',//Initial Latitude
 }
 
 _goToMyPosition = (lat, lon) => {
  this.refs['Map_Ref'].injectJavaScript(`
    mymap.setView([${lat}, ${lon}], 10)
    L.marker([${lat}, ${lon}]).addTo(mymap)
  `)
}


 componentDidMount = () => {
  var that =this;
  //Checking for the permission just after component loaded
  if(Platform.OS === 'ios'){
    this.callLocation(that);
  }else{
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
            'title': 'Location Access Required',
            'message': 'This App needs to Access your location'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          that.callLocation(that);
        } else {
          alert("Permission Denied");
        }
      } catch (err) {
        alert("err",err);
        console.warn(err)
      }
    }
    requestLocationPermission();
  }
}
callLocation(that){
    Geolocation.getCurrentPosition(
      //Will give you the current location
       (position) => {
          const currentLongitude = JSON.stringify(position.coords.longitude);
          //getting the Longitude from the location json
          const currentLatitude = JSON.stringify(position.coords.latitude);
          //getting the Latitude from the location json
          that.setState({ currentLongitude:currentLongitude });
          //Setting state Longitude to re re-render the Longitude Text
          that.setState({ currentLatitude:currentLatitude });
          //Setting state Latitude to re re-render the Longitude Text
       },
       (error) => alert(error.message),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    that.watchID = Geolocation.watchPosition((position) => {
      //Will give you the location on location change
        console.log(position);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
       that.setState({ currentLongitude:currentLongitude });
       //Setting state Longitude to re re-render the Longitude Text
       that.setState({ currentLatitude:currentLatitude });
       //Setting state Latitude to re re-render the Longitude Text
    });
 }
 componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
 }



  render() {
    
    
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.Container}>
          <WebView ref={'Map_Ref'}  source={{html: html_script }}
           style={styles.Webview}  
                   
           />
           <View style={styles.ButtonArea}>
            <TouchableOpacity style={styles.Button} onPress={() => this._goToMyPosition(this.state.currentLatitude, this.state.currentLongitude)}>
              <Text style={styles.ButtonText}>Ir para Minha Posição</Text>
            </TouchableOpacity>
            </View>
       
        </SafeAreaView>
      </>
      
    );
  }
  
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    padding: 10,
    backgroundColor: 'grey'
  
  },
  Webview: {
    flex: 2,
    
  },
  ButtonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  Button: {
    width: 80,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  }
});

export default Map;
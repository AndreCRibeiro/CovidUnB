import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from './styles';

import Main from './pages/Main';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Volunteer from './pages/Volunteer';
import Talk from './pages/Talk';
import Questions from './pages/Questions';
import Solidary from './pages/Solidary';
import HelpRequest from './pages/HelpRequest';
import Map from './pages/Map';


const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTintColor: colors.white,
          headerStyle: { height: 40, backgroundColor: colors.headerBlue },
          headerTitle: '',
        }}
      >
        <AppStack.Screen
          name="Main"
          component={Main}
          options={{
            headerStyle: {
              height: 20,
              backgroundColor: colors.headerBlue,
            },
          }}
        />
        <AppStack.Screen name="Register" component={Signup} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Volunteer" component={Volunteer} />
        <AppStack.Screen name="Talk" component={Talk} />
        <AppStack.Screen name="HelpRequest" component={HelpRequest} />
        <AppStack.Screen name="Questions" component={Questions} />
        <AppStack.Screen name="Solidary" component={Solidary} />
        <AppStack.Screen name="Local" component={Map} />

      </AppStack.Navigator>
    </NavigationContainer>
  );
}

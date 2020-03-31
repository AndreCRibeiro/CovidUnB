import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';

import Home from './pages/Home';
import Signup from './pages/Signup';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: { height: 60, backgroundColor: '#0039A6' },
          headerTitle: '',
        }}
      >
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Register" component={Signup} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

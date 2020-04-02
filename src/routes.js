import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Volunteer from './pages/Volunteer';
import Talk from './pages/Talk';
import Questions from './pages/Questions';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: { height: 40, backgroundColor: '#0039A6' },
          headerTitle: '',
        }}
      >
        <AppStack.Screen
          name="Main"
          component={Main}
          options={{
            headerStyle: {
              height: 20,
              backgroundColor: '#0039A6',
            },
          }}
        />
        <AppStack.Screen name="Register" component={Signup} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Volunteer" component={Volunteer} />
        <AppStack.Screen name="Talk" component={Talk} />
        <AppStack.Screen name="Questions" component={Questions} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

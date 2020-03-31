import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Singup from './pages/Signup';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerBackTitleVisible={false}
        headerLayoutPreset="center"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0039A6',
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerTintColor: '#0039A6',
          }}
        />
        <Stack.Screen
          name="Registro"
          component={Singup}
          options={{ headerTintColor: '#0039A6' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

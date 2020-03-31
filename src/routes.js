import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerBackTitleVisible={false}
        headerLayoutPreset="center"
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerStyle: { backgroundColor: '#0039A6' },
            headerTintColor: '#0039A6',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './styles';

import Main from './pages/Main';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Camera from './pages/Camera';
import Volunteer from './pages/Volunteer';
import Talk from './pages/Talk';
import Questions from './pages/Questions';
import Solidary from './pages/Solidary';
import HelpRequest from './pages/HelpRequest';
import Map from './pages/Map';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import ChatList from './pages/ChatsList';
import Orientation from './pages/Orientation';
import MyOrientation from './pages/MyOrientation';
import NewOrientation from './pages/NewOrientation';

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
        headerMode="none"
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
        <AppStack.Screen name="Camera" component={Camera} />
        <AppStack.Screen name="Register" component={Signup} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="ChatList" component={ChatList} />
        <AppStack.Screen name="Map" component={Map} headerMode="none" />
        <AppStack.Screen name="Talk" component={Talk} />
        <AppStack.Screen name="Volunteer" component={Volunteer} />
        <AppStack.Screen name="Solidary" component={Solidary} />
        <AppStack.Screen name="Questions" component={Questions} />
        <AppStack.Screen name="HelpRequest" component={HelpRequest} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="Chat" component={Chat} />
        <AppStack.Screen name="Orientation" component={Orientation} />
        <AppStack.Screen name="MyOrientation" component={MyOrientation} />
        <AppStack.Screen name="NewOrientation" component={NewOrientation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

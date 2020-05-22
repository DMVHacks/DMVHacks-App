import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import WelcomeScreen from './views/Welcome';
import { ClassInfoPage, ClassesOffered, MyClasses } from './views/ClassInfo';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="My Classes"
          component={MyClasses}
        />
        <Stack.Screen
          name="Classes Offered"
          component={ClassesOffered}
        />
        <Stack.Screen
          name="Detailed Class Info"
          component={ClassInfoPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticatedStack from './stacks/AuthenticatedStack';

const Stack = createNativeStackNavigator();
type IsNewUser = { isNewUser: boolean };

export const AppNavigator = ({ isNewUser }: IsNewUser): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'AuthStackScreens'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AuthStackScreens" component={AuthenticatedStack} />
        {/* <Stack.Screen name="AuthStackScreens" component={BottomTabBar} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

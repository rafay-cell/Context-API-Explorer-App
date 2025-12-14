import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../contexts/AuthContext';

import LoginScreen from '../screens/LoginScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { userToken } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {!userToken ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name="Products" component={ProductListScreen} />
          <Stack.Screen name="Details" component={ProductDetailsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

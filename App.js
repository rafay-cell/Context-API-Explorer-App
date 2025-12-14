
import React from 'react';
import { AuthProvider } from './provider/AuthProvider';
import { ApiProvider } from './provider/ApiProvider';
import { ThemeProvider } from './provider/ThemeProvider';
import { LoaderProvider } from './provider/LoaderProvider';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import Loader from './components/Loader';


export default function App() {
  return (
    <AuthProvider>
      <ApiProvider>
        <ThemeProvider>
          <LoaderProvider>
            <NavigationContainer>
              <AppNavigator />
              <Loader />
            </NavigationContainer>
          </LoaderProvider>
        </ThemeProvider>
      </ApiProvider>
    </AuthProvider>
  );
}

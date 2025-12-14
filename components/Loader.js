import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LoaderContext } from '../contexts/LoaderContext';

export default function Loader() {
  const { loading } = useContext(LoaderContext);
  if (!loading) return null;

  return (
    <View style={{ position:'absolute', top:0, bottom:0, left:0, right:0, justifyContent:'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

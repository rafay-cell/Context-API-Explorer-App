import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

export default function LoginScreen() {
  const { login, authError } = useContext(AuthContext);
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={() => login(email, password)} />
      {authError && <Text>{authError}</Text>}
    </View>
  );
}

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const handleLogin = () => {
    // You can add authentication logic here, for simplicity, let's assume the username is valid
    navigation.navigate('Chat', {username});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 1, 
    marginBottom: 20,
    paddingHorizontal: 15,
    width: '80%',
  },
});

export default LoginScreen;

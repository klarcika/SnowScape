<<<<<<< HEAD
import firebase from 'firebase';
import React, { useState } from 'react';
=======
/*import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
>>>>>>> 0db9d9c7e1549bd159f3f25e395db7082497e126
import { Alert, Button, Text, TextInput, View } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User logged in successfully
        const user = userCredential.user;
        console.log('User logged in:', user);
        navigation.navigate('Home'); // Redirect to the home 
      })
      .catch((error) => {
        // Handle login errors
        Alert.alert('Login Error', error.message);
        console.error('Login error:', error.message);
      });
  };

  return (
    <View>
      <Text>Vpis</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Geslo"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

//export default LoginPage;
*/
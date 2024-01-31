<<<<<<< HEAD
import firebase from 'firebase';
import React, { useState } from 'react';
=======
/*import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
>>>>>>> 0db9d9c7e1549bd159f3f25e395db7082497e126
import { Alert, Button, Text, TextInput, View } from 'react-native';

const RegistrationPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User registered successfully
        const user = userCredential.user;
        console.log('User registered:', user);
        navigation.navigate('Home'); // Redirect to the home 
      })
      .catch((error) => {
        // Handle registration errors
        Alert.alert('Registration Error', error.message);
        console.error('Registration error:', error.message);
      });
  };

  return (
    <View>
      <Text>Registracija</Text>
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
      <Button title="Registriraj se" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationPage;*/

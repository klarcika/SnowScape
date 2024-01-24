import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Alert, Button, Text, TextInput, View } from 'react-native';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const RegistrationPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    createUserWithEmailAndPassword(auth, email, password)
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

export default RegistrationPage;

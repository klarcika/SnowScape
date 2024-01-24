/*import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert, Button, Text, TextInput, View } from 'react-native';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
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
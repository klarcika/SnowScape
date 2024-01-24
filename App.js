import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // Ensure you have this import
import Icon from 'react-native-vector-icons/FontAwesome';
import CardPage from './src/CardPage';
import HomePage from './src/HomePage';
import LoginPage from './src/Login/LoginPage';
import RegistrationPage from './src/Login/RegistrationPage';
import AddEquipmentPage from './src/Profile/AddEquipmentPage';
import CardDetailsScreen from './src/Profile/CardDetailsScreen';
import CardsPage from './src/Profile/CardsPage';
import EquipmentDetailsPage from './src/Profile/EquipmentDetailsPage';
import EquipmentPage from './src/Profile/EquipmentPage';
import TrailPage from './src/TrailPage';
import UserPage from './src/UserPage';
import WeatherPage from './src/Weather/WeatherPage';
//import * as firebase from 'firebase';
//import RegistrationPage from './src/Login/RegistrationPage';
//import LoginPage from './src/Login/LoginPage';
import CardsPage from './src/Profile/CardsPage';
import EquipmentPage from './src/Profile/EquipmentPage';
import EquipmentDetailsPage from './src/Profile/EquipmentDetailsPage';
//import { getFirestore } from "firebase/firestore";
//import AddEquipmentPage from './src/Profile/AddEquipmentPage';
import CardDetailsPage from './src/Profile/CardDetailsPage';
>>>>>>> 51571184c7862459a6b8770c3eaee148eef7c124

/*const firebaseConfig = {
  apiKey: "AIzaSyCPwgOXynkwzZUZhtOAmPe6pbitsNGTW-I",
  authDomain: "snowscape-b7403.firebaseapp.com",
  projectId: "snowscape-b7403",
  storageBucket: "snowscape-b7403.appspot.com",
  messagingSenderId: "860202849265",
  appId: "1:860202849265:web:fdb3334d1c459e52ceea50",
  measurementId: "G-YLHBG58DFZ"
};*/

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const Stack = createStackNavigator();

//export const db = getFirestore(app);

// Create a navigation service
export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

const BaseScreen = ({ navigation, children }) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Snow Scape</Text>
        </View>
      </View>
      <View style={styles.content}>{children}</View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="white" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <Icon name="user" size={30} color="white" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Trail')}>
          <Icon name="globe" size={30} color="white" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Card')}>
          <Icon name="star" size={30} color="white" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
          <Icon name="cloud" size={30} color="white" style={styles.footerIcon} />
        </TouchableOpacity>
        

      </View>
    </View>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <BaseScreen navigation={navigation}>
      <HomePage />
    </BaseScreen>
  );
};

const UserScreen = () => {
  return (

    <BaseScreen>
      <UserPage />
    </BaseScreen>
  );
};

const TrailScreen = () => {
  return (
    <BaseScreen>
      <TrailPage />
    </BaseScreen>
  );
};

const CardScreen = () => {
  return (
    <BaseScreen>
      <CardPage />
    </BaseScreen>
  );
};

const WeatherScreen = () => {
  return (
    <BaseScreen>
      <WeatherPage />
    </BaseScreen>
  );
};



const CardsScreen = () => {
  return (
    <BaseScreen>
      <CardsPage />
    </BaseScreen>
  );
};

<<<<<<< HEAD
=======
const CardDetailsScreen = () => {
  return (
    <BaseScreen>
      <CardDetailsPage />
    </BaseScreen>
  );
};
>>>>>>> 51571184c7862459a6b8770c3eaee148eef7c124

const EquipmentScreen = () => {
  return (
    <BaseScreen>
      <EquipmentPage />
    </BaseScreen>
  );
};

const EquipmentDetailsScreen = () => {
  return (
    <BaseScreen>
      <EquipmentDetailsPage />
    </BaseScreen>
  );
};



const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Trail" component={TrailScreen} />
        <Stack.Screen name="Card" component={CardScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Cards" component={CardsScreen} />
        <Stack.Screen name="CardDetails" component={CardDetailsScreen} />
        <Stack.Screen name="Equipment" component={EquipmentScreen} />
        <Stack.Screen name="EquipmentDetails" component={EquipmentDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//-----------------------------------------------style ------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
  },
  titleContainer: {
    flex: 1,
    marginTop: 20, // Adjusted margin to move the title lower
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileIconContainer: {
    marginLeft: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
  },
  footerIcon: {
    backgroundColor: 'lightblue',
  },
});
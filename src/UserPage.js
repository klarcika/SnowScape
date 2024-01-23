import React from 'react';
import { Text, View } from 'react-native';

const UserPage = () => {
  return (
    <View>
      <Text>User Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cards')}>
        <View>
          <Text>Moje karte</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Equipment')}>
        <View>
          <Text>Moja oprema</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserPage;

import React from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const TrailPage = () => {
  return (
    <View>
      <MapView
         style={{ flex: 1, width: 300 }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 46.46015,
         longitude: 15.33705,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
      />
    </View>
  );
};

export default TrailPage;

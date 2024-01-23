import React from 'react';
import { View, Text } from 'react-native';

const EquipmentDetailsPage = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>Tip opreme: {item.type}</Text>
      <Text>Naziv: {item.name}</Text>
      <Text>Leto nakupa: {item.year}</Text>
      <Text>Velikost: {item.size}</Text>
      <Text>Stanje: {item.condition}</Text>
      <Text>Opis opreme: {item.description}</Text>
      <Text>Model: {item.model}</Text>
    </View>
  );
};

export default EquipmentDetailsPage;

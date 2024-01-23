import React from 'react';
import { View, Text } from 'react-native';

const CardDetailsScreen = ({ route }) => {
  const { card } = route.params;

  return (
    <View>
        <Text>Ime karte: {card.name}</Text>
        <Text>Tip karte: {card.type}</Text>
        <Text>Smučišče: {card.resort}</Text>
        <Text>Veljavna do: {card.validUntil}</Text>
        <Text>Datum nakupa: {card.purchaseDate}</Text>
    </View>
  );
};

export default CardDetailsScreen;
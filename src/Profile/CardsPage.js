import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const CardsPage = ({ navigation }) => {
  const cards = [
    { id: 1, name: 'Karta 1', resort: 'Kope', type: 'Enkratna', validUntil: '01.04.2024', purchaseDate: '01.01.2024' },
    { id: 2, name: 'Karta 2', resort: 'Bukovnik', type: 'Sezonska', validUntil: '01.01.2025', purchaseDate: '01.01.2024' },
    { id: 3, name: 'Karta 3', resort: 'Rogla', type: 'Enkratna', validUntil: '01.01.2025', purchaseDate: '01.01.2024' },
    // tu bi se dinamično prebrale karte
  ];

  // ce kliknes na karto naj bi slo na detajle kart
  return (
    <View>
      {cards.map((card) => (
        <TouchableOpacity key={card.id} onPress={() => navigation.navigate('CardDetails', { card })}>
          <View>
            <Text>{card.resort}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => {/* Tukaj ne naredi ničesar for now */}}>
        <View>
          <Text>Dodaj novo karto</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardsPage;

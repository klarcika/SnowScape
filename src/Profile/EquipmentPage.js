import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EquipmentPage = () => {
  const navigation = useNavigation();

  const equipment = [
    { id: 1,
    name: 'Čelada Smith Ventage',
    type: 'Čelada',
    year: '2023',
    size: 'M',
    condition: 'Novo',
    description: 'Zelena čelada z belimi progami',
    model: 'Smith Ventage 1'},
    { id: 2,
    name: 'Smuči Fisher',
    type: 'Smuči',
    year: '2024',
    size: 'M',
    condition: 'Novo',
    description: 'Zelene smuči',
    model: 'Fisher Ultra Max'},
    {id: 3,
    name: 'Smučarske hlače Patagonia',
    type: 'Smučarske hlače',
    year: '2017',
    size: 'M',
    condition: 'Rabljeno',
    description: 'Črne smučarske hlače s srebrno zadrgo'},
  ];

  return (
    <View>
      {equipment.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('EquipmentDetails', { item })}>
          <View>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => {/* Dodaj logiko za dodajanje nove opreme */}}>
        <View>
          <Text>Dodaj novo opremo</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EquipmentPage;

import React, {useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, ScrollView, Modal, Pressable, Alert } from 'react-native';

const cards = [
  { id: 1, name: 'Enkratna karta za Kope', resort: 'Kope', type: 'Enkratna', validUntil: '01.04.2024', purchaseDate: '01.01.2024' },
  { id: 2, name: 'Karta 2', resort: 'Bukovnik', type: 'Sezonska', validUntil: '01.01.2025', purchaseDate: '01.01.2024' },
  { id: 3, name: 'Karta 3', resort: 'Rogla', type: 'Enkratna', validUntil: '01.01.2025', purchaseDate: '01.01.2024' },
  { id: 4, name: 'Sezonska karta Rogla', resort: 'Rogla', type: 'Sezonska', validUntil: '03.07.2024', purchaseDate: '01.01.2023' },
  { id: 5, name: 'Karta 5', resort: 'Mariborsko pohorje', type: 'Enkratna', validUntil: '01.01.2025', purchaseDate: '01.01.2024' },
  { id: 6, name: 'Karta 6', resort: 'Vogel', type: 'Enkratna', validUntil: '01.01.2025', purchaseDate: '01.01.2024' },
];

const equipments = [
  { id: 7, name: 'Čelada Smith Ventage', type: 'Čelada', year: '2023', size: 'M', condition: 'Novo', description: 'Zelena čelada z belimi progami', model: 'Smith Ventage 1'},
  { id: 8, name: 'Smuči Fisher', type: 'Smuči', year: '2024', size: 'M', condition: 'Novo', description: 'Zelene smuči', model: 'Fisher Ultra Max'},
  {id: 9, name: 'Smučarske hlače Patagonia', type: 'Smučarske hlače', year: '2017', size: 'M', condition: 'Rabljeno', description: 'Črne smučarske hlače s srebrno zadrgo', model: 'Skiing Pants Patagonia'},
  {id: 10, name: 'Smučarska bunda Patagonia', type: 'Smučarske bunda', year: '2024', size: 'L', condition: 'Novo', description: 'Roza bunda z zelenimi pikicami', model: 'Skiing jacket Patagonia'},
  {id: 11, name: 'Smučarske palice Blizzard Skis', type: 'Smučarske palice', year: '2018', size: 'L', condition: 'Rabljeno', description: 'Črne smučarske hlače s srebrno zadrgo', model: 'Blizzard Skis XP'},
  {id: 12, name: 'Smuči Fisher', type: 'Smuči', year: '2015', size: 'M', condition: 'Rabljeno', description: 'Zeleno-bele smuči', model: 'Fisher Time'},
];

const UserPage = () => {

  const [initialCards, setInitialCards] = useState(cards);

  const [modalVisible, setModalVisible] = useState(() => {
    const initialModalState = {};
    initialCards.forEach((card) => {
      initialModalState[card.id] = false;
    });
    equipments.forEach((equipment) => {
      initialModalState[equipment.id] = false;
    });
    return { ...initialModalState, addCard: false };
  });

  const toggleModal = (itemId) => {
    setModalVisible((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const [newCard, setNewCard] = useState({
    name: '',
    resort: '',
    type: '',
    validUntil: '',
    purchaseDate: '',
  });

  const addNewCard = () => {
    const cardToAdd = {
      id: initialCards.length + 1,
      name: newCard.name,
      resort: newCard.resort,
      type: newCard.type,
      validUntil: newCard.validUntil,
      purchaseDate: newCard.purchaseDate,
    };
  
    const updatedCards = [...initialCards, cardToAdd];
  
    setInitialCards(updatedCards);
    setModalVisible((prev) => ({
      ...prev,
      [cardToAdd.id]: true,
      addCard: false,
    }));
  
    setNewCard({
      name: '',
      resort: '',
      type: '',
      validUntil: '',
      purchaseDate: '',
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      <View >
        <Text style={styles.headerText}>Smučarske karte</Text>
      </View>

      {cards.map((card, index) => (
        <View key={index} style={styles.resortContainer}>
          <View style={styles.infoContainer}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible[card.id]}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                toggleModal(card.id);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{`Naziv karte: ${card.name}`}</Text>
                  <Text style={styles.modalText}>{`Smučišče: ${card.resort}`}</Text>
                  <Text style={styles.modalText}>{`Tip karte: ${card.type}`}</Text>
                  <Text style={styles.modalText}>{`Veljavnost karte: ${card.validUntil}`}</Text>
                  <Text style={styles.modalText}>{`Datum nakupa karte: ${card.purchaseDate}`}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => toggleModal(card.id)}>
                    <Text style={styles.textStyle}>Zapri podrobnosti</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => toggleModal(card.id)}>
              <Text style={styles.textStyle}>{`${card.name}`}</Text>
            </Pressable>
          </View>
        </View>
      ))}

      

      <View >
        <Text style={styles.headerText}>Smučarska oprema</Text>
      </View>

      {equipments.map((equipment, index) => (
        <View key={index} style={styles.resortContainer}>
          <View style={styles.infoContainer}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible[equipment.id]}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                toggleModal(equipment.id);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{`Naziv opreme: ${equipment.name}`}</Text>
                  <Text style={styles.modalText}>{`Tip opreme: ${equipment.type}`}</Text>
                  <Text style={styles.modalText}>{`Leto nakupa opreme: ${equipment.year}`}</Text>
                  <Text style={styles.modalText}>{`Velikost opreme: ${equipment.size}`}</Text>
                  <Text style={styles.modalText}>{`Stanje opreme: ${equipment.condition}`}</Text>
                  <Text style={styles.modalText}>{`Opis opreme: ${equipment.description}`}</Text>
                  <Text style={styles.modalText}>{`Model opreme: ${equipment.model}`}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => toggleModal(equipment.id)}>
                    <Text style={styles.textStyle}>Zapri podrobnosti</Text>
                  </Pressable>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  Alert.alert('Uredi opremo');
                }}
              >
                <Text style={styles.textStyle}>Uredi opremo</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  Alert.alert('Izbriši opremo');
                }}
              >
                <Text style={styles.textStyle}>Izbriši opremo</Text>
              </Pressable>
            </View>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => toggleModal(equipment.id)}>
              <Text style={styles.textStyle}>{`${equipment.name}`}</Text>
            </Pressable>
          </View>
        </View>

        
      ))}

      <View style={styles.infoContainer}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible((prev) => ({ ...prev, addCard: true }))}
        > 
          <Text style={styles.textStyle}>Dodaj novo karto</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible((prev) => ({ ...prev, addCard: true }))}
        > 
          <Text style={styles.textStyle}>Dodaj nov kos opreme</Text>
        </Pressable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible.addCard}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible((prev) => ({ ...prev, addCard: false }));
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* Form for adding a new card */}
              <TextInput
                style={styles.input}
                placeholder="Naziv karte"
                onChangeText={(text) =>
                  setNewCard((prev) => ({ ...prev, name: text }))
                }
                value={newCard.name}
              />
              <TextInput
                style={styles.input}
                placeholder="Smučišče"
                onChangeText={(text) =>
                  setNewCard((prev) => ({ ...prev, resort: text }))
                }
                value={newCard.resort}
              />
              <TextInput
                style={styles.input}
                placeholder="Tip karte"
                onChangeText={(text) =>
                  setNewCard((prev) => ({ ...prev, type: text }))
                }
                value={newCard.type}
              />
              <TextInput
                style={styles.input}
                placeholder="Veljavnost karte"
                onChangeText={(text) =>
                  setNewCard((prev) => ({ ...prev, validUntil: text }))
                }
                value={newCard.validUntil}
              />
              <TextInput
                style={styles.input}
                placeholder="Datum nakupa karte"
                onChangeText={(text) =>
                  setNewCard((prev) => ({ ...prev, purchaseDate: text }))
                }
                value={newCard.purchaseDate}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={addNewCard}
              >
                <Text style={styles.textStyle}>Dodaj karto</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: '#3498db',
    padding: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    margin: 45,
  },
  resortContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  resortName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  googleMapsLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#78dce3',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#57abd9',
    width: 200,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default UserPage;
